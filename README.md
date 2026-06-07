<div align="center">

<img alt="Helyos" src="assets/helyos-logo.png" width="200">

# helyos-core

**Core domain types, traits, and orchestrator for Helyos**

[![CI](https://github.com/helyos-labs/helyos-core/actions/workflows/ci.yml/badge.svg)](https://github.com/helyos-labs/helyos-core/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Rust](https://img.shields.io/badge/rust-1.85%2B-orange.svg)](https://www.rust-lang.org)

helyos-core defines the shared domain model, port traits, and actor-based orchestrator
that power the Helyos container platform &mdash; *80% of Kubernetes use-cases with 20% of
the complexity*. It is a library crate with no binary, consumed by
[helyosd](https://github.com/helyos-labs/helyosd) (the daemon) and
[helyos-cli](https://github.com/helyos-labs/helyos-cli) (the CLI).

</div>

---

## Features

- **Domain models** &mdash; Project, Deployment, Pod, Node, Route, Certificate, SubnetAllocation with full serde support
- **Actor-model orchestrator** &mdash; async command loop over `mpsc`/`oneshot` channels with 24 command variants (deploy, scale, stop, projects, secrets, routes, health, scheduling)
- **Port traits (hexagonal architecture)** &mdash; `ContainerRuntime` (14 methods), `StateStore`, `SecretStore`, `ClusterTransport`, `DnsProvider`, `RouteStore`, `ProxyBackend`, `MetricsPort`
- **YAML deployment specs** &mdash; declarative config with DNS-name validation, resource limits, health probes, restart policies, volumes, secrets, and network config
- **Weighted scheduler** &mdash; spread and bin-pack strategies with configurable CPU/memory/load/failure weights
- **Health tracking** &mdash; probe-based health state machine with configurable intervals, timeouts, and retry thresholds
- **Restart policies** &mdash; `always`, `onfailure`, and `never` with exponential backoff and crash-loop detection
- **180 unit tests**

## Architecture

```
helyos-core/
  src/
    config.rs              -- YAML spec parser and validator
    duration.rs            -- Human-friendly duration parsing (e.g. "10s", "5m")
    error.rs               -- HelyosError type and Result alias
    domain/
      models/
        project.rs         -- Project with Active/Suspended status
        deployment.rs      -- DeploymentSpec, volumes, health checks, resources
        pod.rs             -- Pod lifecycle: Pending -> Running -> Stopped/Failed
        node.rs            -- Node with role (Master/Worker), resources, heartbeat
        route.rs           -- Route, Certificate, TlsMode, SubnetAllocation
      orchestrator.rs      -- Actor loop: Command enum + OrchestratorHandle
      scheduler.rs         -- WeightedScheduler with spread/binpack strategies
      health.rs            -- HealthTracker state machine
      restart.rs           -- RestartState with exponential backoff
    ports/
      runtime.rs           -- ContainerRuntime trait (14 async methods)
      state.rs             -- StateStore trait (projects, deployments, pods, nodes)
      secrets.rs           -- SecretStore trait (set/get/list/delete)
      cluster.rs           -- ClusterTransport trait (register, heartbeat, assign)
      dns.rs               -- DnsProvider trait (register/deregister/lookup)
      proxy.rs             -- ProxyBackend trait (apply_routes, reload, health)
      route_store.rs       -- RouteStore trait (routes, certificates, subnets)
      metrics.rs           -- MetricsPort trait + NoOpMetrics
    adapters/
      state_memory.rs      -- In-memory StateStore (tests/dev)
      secrets_memory.rs    -- In-memory SecretStore (tests/dev)
      route_store_memory.rs-- In-memory RouteStore (tests/dev)
```

The crate follows **hexagonal architecture** (ports and adapters). All external
concerns are expressed as traits in `src/ports/`. The orchestrator and domain logic
depend only on these traits, never on concrete implementations. Production adapters
(Docker/containerd runtimes, SQLite state and encrypted-secret stores, nginx/Caddy/Traefik
proxy backends, embedded DNS, and gRPC cluster transport) live in
[helyosd](https://github.com/helyos-labs/helyosd); in-memory adapters for testing ship
here in `src/adapters/`.

## Usage

### As a dependency

```toml
[dependencies]
helyos-core = { git = "https://github.com/helyos-labs/helyos-core" }
```

### Deployment spec (YAML)

```yaml
project: ecommerce

deployment:
  name: api

replicas: 3
image: ghcr.io/company/api:latest

ports:
  - 3000

env:
  DATABASE_URL: "postgres://localhost/ecommerce"
  REDIS_URL: "redis://localhost:6379"

network:
  public: true
  domain: api.example.com
  https: true

healthcheck:
  path: /health
  interval: 10s

restart: always
```

### Parsing a spec

```rust
use std::path::Path;
use helyos_core::config::parse_deployment_file;

let spec = parse_deployment_file(Path::new("deploy.yaml"))?;
println!("Deploying {} to project {}", spec.deployment.name, spec.project);
```

### Spawning the orchestrator

```rust
use helyos_core::domain::orchestrator::Orchestrator;

let handle = Orchestrator::spawn(
    runtime,         // Arc<dyn ContainerRuntime>
    Some(store),     // Option<Arc<dyn StateStore>>
    Some(secrets),   // Option<Arc<dyn SecretStore>>
    Some(transport), // Option<Arc<dyn ClusterTransport>>
    dns,             // Option<Arc<dyn DnsProvider>>
    master_ip,       // Option<String>
    proxy,           // Option<Arc<dyn ProxyBackend>>
    route_store,     // Option<Arc<dyn RouteStore>>
    metrics,         // Option<Arc<dyn MetricsPort>>
);

// All interaction goes through the handle (thread-safe, cloneable)
let deployment = handle.deploy(spec).await?;
let pods = handle.list_pods(None).await;
```

### Key port traits

```rust
#[async_trait]
pub trait ContainerRuntime: Send + Sync {
    fn runtime_name(&self) -> &'static str;
    async fn pull_image(&self, image: &str) -> Result<()>;
    async fn create_container(&self, config: &ContainerConfig) -> Result<String>;
    async fn start_container(&self, id: &str) -> Result<()>;
    async fn stop_container(&self, id: &str, timeout_secs: u64) -> Result<()>;
    async fn remove_container(&self, id: &str, force: bool) -> Result<()>;
    async fn inspect_container(&self, id: &str) -> Result<ContainerInfo>;
    async fn logs(&self, id: &str, tail: Option<u64>) -> Result<LogStream>;
    async fn container_exists(&self, name: &str) -> Result<bool>;
    async fn create_network(&self, name: &str) -> Result<String>;
    async fn remove_network(&self, name: &str) -> Result<()>;
    async fn connect_to_network(&self, container_id: &str, network: &str) -> Result<()>;
    async fn container_ip(&self, container_id: &str, network: &str) -> Result<String>;
    async fn events(&self) -> Result<EventStream>;
}

#[async_trait]
pub trait StateStore: Send + Sync {
    async fn insert_project(&self, project: &Project) -> Result<()>;
    async fn list_projects(&self) -> Result<Vec<Project>>;
    async fn insert_deployment(&self, deployment: &Deployment) -> Result<()>;
    async fn list_deployments(&self, project: Option<&str>) -> Result<Vec<Deployment>>;
    // ... projects, deployments, pods, nodes, and cluster config (23 methods)
}
```

## Development

```bash
# Build
cargo build

# Run all 180 tests
cargo test

# Run tests with output
cargo test -- --nocapture

# Benchmarks (scheduler, config parsing)
cargo bench
```

## Related Repositories

| Repository | Description |
|---|---|
| [helyos](https://github.com/helyos-labs/helyos) | Project overview, docs, and roadmap |
| [helyosd](https://github.com/helyos-labs/helyosd) | Daemon -- concrete adapters, REST API, clustering, TLS, tokens |
| [helyos-cli](https://github.com/helyos-labs/helyos-cli) | kubectl-style CLI for deploying and managing containers |

## License

Apache-2.0 -- see [LICENSE](LICENSE) for details.
