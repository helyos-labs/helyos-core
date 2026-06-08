# Changelog

## 0.1.8

### Fixed

- **Automatic-TLS routes are no longer rejected.** `route add --https` (and a deployment
  spec's `network.https: true`) failed with *"TLS mode 'auto' requires a non-empty ACME
  email, but none is configured"* even when the daemon was started with `--acme-email`.
  The orchestrator now receives the configured ACME email and validates against it.
- **Deployments are recreated after a host reboot.** On startup the orchestrator marked
  pods whose container had vanished as `Failed` but never recreated them. It now honours
  the restart policy: `always`/`onfailure` pods are recreated (the dead container is
  removed first), `never` pods are left `Failed`.
- **The reverse-proxy config tracks pod IPs.** The full proxy config is now regenerated
  from the route store and the live pods on every route change *and* after each deployment
  reconcile, so upstream addresses stay correct when pods are recreated with new IPs
  (previously the config kept the stale IP, causing 502/503s after a redeploy or reboot).
- **The `network` block now creates a route.** Deploying a spec with `network.public:
  true` and a `domain` now creates the matching route (previously only `route add` did).
- **Public deployments are no longer host-published.** A deployment with a public route is
  reached through the reverse proxy over the project network; its ports are no longer also
  bound on the host, which collided with the proxy on ports 80/443.

### Added

- `reconcile_recreates_stale_pods_for_always_policy` and
  `reconcile_marks_stale_pods_failed_for_never_policy` regression tests.
