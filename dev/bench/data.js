window.BENCHMARK_DATA = {
  "lastUpdate": 1782730748057,
  "repoUrl": "https://github.com/helyos-labs/helyos-core",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "3ee1cb9c36c53accdf4cadcf5a36614df93fd63e",
          "message": "style: fix formatting in scheduler benchmark",
          "timestamp": "2026-05-22T22:04:28+02:00",
          "tree_id": "3247fe2f668bcf85a466976f7f93813c55098839",
          "url": "https://github.com/helyos-labs/helyos-core/commit/3ee1cb9c36c53accdf4cadcf5a36614df93fd63e"
        },
        "date": 1779487255270,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 30496,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 70944,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 311,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1220,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1229,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "952fc6fe28a11ffea35cee86100c20cf55a43168",
          "message": "feat: add command field to ContainerConfig",
          "timestamp": "2026-05-23T00:05:27+02:00",
          "tree_id": "a1fce8f09ebb7b73fa798f015e7d008e60ff2474",
          "url": "https://github.com/helyos-labs/helyos-core/commit/952fc6fe28a11ffea35cee86100c20cf55a43168"
        },
        "date": 1779487623309,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 28046,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 66655,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 241,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 953,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 951,
            "range": "± 11",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "0a9c4e2ad06173bacbd180653c969f5cc65aa4d0",
          "message": "feat: add MetricsPort to Orchestrator with handler instrumentation\n\nAdds an optional MetricsPort field (9th parameter) to Orchestrator::spawn,\ninstruments handle_deploy, handle_scale, handle_stop, handle_remove_deployment,\nhandle_container_exited, and select_node with deployment op, container event,\nand schedule decision metrics; also adds update_gauge_counts helper.",
          "timestamp": "2026-05-24T10:57:03+02:00",
          "tree_id": "2d0eeffb56975e18da5105149b7076f6bacc4a01",
          "url": "https://github.com/helyos-labs/helyos-core/commit/0a9c4e2ad06173bacbd180653c969f5cc65aa4d0"
        },
        "date": 1779614282773,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 29150,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 66284,
            "range": "± 6204",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 342,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1337,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1340,
            "range": "± 4",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "01a5a3f544fa2fe09b58136587c381b85802dc98",
          "message": "style: apply cargo fmt formatting to metrics port and orchestrator",
          "timestamp": "2026-05-24T19:09:07+02:00",
          "tree_id": "c044e94f047b8319dc789b940d7340e350303c0e",
          "url": "https://github.com/helyos-labs/helyos-core/commit/01a5a3f544fa2fe09b58136587c381b85802dc98"
        },
        "date": 1779655177058,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 29479,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 70518,
            "range": "± 2290",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 318,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1230,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1234,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "ec637f5998c180d516366fb01f922b73105dd3ba",
          "message": "fix: persist create_project, reject TlsMode::Auto without ACME email\n\n- handle_create_project now persists to state store (was memory-only)\n- Reject TlsMode::Auto route requests when no ACME email is configured",
          "timestamp": "2026-06-01T15:52:51+02:00",
          "tree_id": "95ecfdc91946c5e2e916e8d2538ccbc34d77eee1",
          "url": "https://github.com/helyos-labs/helyos-core/commit/ec637f5998c180d516366fb01f922b73105dd3ba"
        },
        "date": 1780322123841,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 30534,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 70361,
            "range": "± 1438",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1226,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 316,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1234,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "3930dce50e46902dbfd55eca3a51b1aed6ad07ea",
          "message": "refactor: replace std Mutex/RwLock with parking_lot (no poison)\n\nparking_lot locks never poison, eliminating 47 .lock().unwrap() sites.",
          "timestamp": "2026-06-01T16:02:05+02:00",
          "tree_id": "35aee293be8f27bf5dfcc1cff142e546d23705c8",
          "url": "https://github.com/helyos-labs/helyos-core/commit/3930dce50e46902dbfd55eca3a51b1aed6ad07ea"
        },
        "date": 1780324169920,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 30666,
            "range": "± 1644",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 72354,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 311,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1219,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 314,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1224,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "0eca8bdf2f328911747e8fab3557b56bcc5ff9c0",
          "message": "ci: run all tests (not just --lib), add macOS CI",
          "timestamp": "2026-06-01T23:05:19+02:00",
          "tree_id": "1b4f467106348ba48f2b830ac21158dccb820175",
          "url": "https://github.com/helyos-labs/helyos-core/commit/0eca8bdf2f328911747e8fab3557b56bcc5ff9c0"
        },
        "date": 1780348152033,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3420,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 23327,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 240,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 953,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 240,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 949,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "committer": {
            "email": "nassime.abdiou@icloud.com",
            "name": "Nassime Abdiou",
            "username": "na2sime"
          },
          "distinct": true,
          "id": "234faaf8121ac80d73d705336ced797bb5e5892d",
          "message": "fix: restore Command enum visibility for external consumers",
          "timestamp": "2026-06-01T23:08:55+02:00",
          "tree_id": "e0a1d62d05a8460aa809a3334eb8f0938e3c4bfc",
          "url": "https://github.com/helyos-labs/helyos-core/commit/234faaf8121ac80d73d705336ced797bb5e5892d"
        },
        "date": 1780348244165,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3617,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 26095,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 310,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1218,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 313,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1230,
            "range": "± 2",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NA2SIME",
            "username": "na2sime",
            "email": "54268491+na2sime@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6f3db1702ac28a90cde47c3f039841e53d2f609",
          "message": "fix: ACME-TLS routes, reboot reconcile, proxy IP tracking, network-block routes (#7)\n\n- `route add --https` / `network.https` are no longer rejected when the daemon has\n  an ACME email (the configured `--acme-email` is now threaded into the orchestrator)\n- reconcile_stale_pods recreates pods per restart policy after a reboot instead of\n  leaving them Failed (the dead container is removed first)\n- new reapply_routes regenerates the full proxy config from the route store + live pods\n  on every route change and after each reconcile, so upstream IPs stay correct\n- handle_deploy creates the route from the spec's network.public/domain/https block\n- public deployments are no longer host-published (they are reached via the proxy)\n\nBumps to 0.1.8. Adds reconcile regression tests.",
          "timestamp": "2026-06-08T10:00:42Z",
          "url": "https://github.com/helyos-labs/helyos-core/commit/a6f3db1702ac28a90cde47c3f039841e53d2f609"
        },
        "date": 1780916110865,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3255,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 21465,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 245,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 960,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 246,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 958,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NA2SIME",
            "username": "na2sime",
            "email": "54268491+na2sime@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6f3db1702ac28a90cde47c3f039841e53d2f609",
          "message": "fix: ACME-TLS routes, reboot reconcile, proxy IP tracking, network-block routes (#7)\n\n- `route add --https` / `network.https` are no longer rejected when the daemon has\n  an ACME email (the configured `--acme-email` is now threaded into the orchestrator)\n- reconcile_stale_pods recreates pods per restart policy after a reboot instead of\n  leaving them Failed (the dead container is removed first)\n- new reapply_routes regenerates the full proxy config from the route store + live pods\n  on every route change and after each reconcile, so upstream IPs stay correct\n- handle_deploy creates the route from the spec's network.public/domain/https block\n- public deployments are no longer host-published (they are reached via the proxy)\n\nBumps to 0.1.8. Adds reconcile regression tests.",
          "timestamp": "2026-06-08T10:00:42Z",
          "url": "https://github.com/helyos-labs/helyos-core/commit/a6f3db1702ac28a90cde47c3f039841e53d2f609"
        },
        "date": 1781525610300,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3605,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 24356,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 311,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1222,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 312,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1227,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NA2SIME",
            "username": "na2sime",
            "email": "54268491+na2sime@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6f3db1702ac28a90cde47c3f039841e53d2f609",
          "message": "fix: ACME-TLS routes, reboot reconcile, proxy IP tracking, network-block routes (#7)\n\n- `route add --https` / `network.https` are no longer rejected when the daemon has\n  an ACME email (the configured `--acme-email` is now threaded into the orchestrator)\n- reconcile_stale_pods recreates pods per restart policy after a reboot instead of\n  leaving them Failed (the dead container is removed first)\n- new reapply_routes regenerates the full proxy config from the route store + live pods\n  on every route change and after each reconcile, so upstream IPs stay correct\n- handle_deploy creates the route from the spec's network.public/domain/https block\n- public deployments are no longer host-published (they are reached via the proxy)\n\nBumps to 0.1.8. Adds reconcile regression tests.",
          "timestamp": "2026-06-08T10:00:42Z",
          "url": "https://github.com/helyos-labs/helyos-core/commit/a6f3db1702ac28a90cde47c3f039841e53d2f609"
        },
        "date": 1782129233285,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3651,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 23376,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 311,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1221,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 312,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1226,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "NA2SIME",
            "username": "na2sime",
            "email": "54268491+na2sime@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "a6f3db1702ac28a90cde47c3f039841e53d2f609",
          "message": "fix: ACME-TLS routes, reboot reconcile, proxy IP tracking, network-block routes (#7)\n\n- `route add --https` / `network.https` are no longer rejected when the daemon has\n  an ACME email (the configured `--acme-email` is now threaded into the orchestrator)\n- reconcile_stale_pods recreates pods per restart policy after a reboot instead of\n  leaving them Failed (the dead container is removed first)\n- new reapply_routes regenerates the full proxy config from the route store + live pods\n  on every route change and after each reconcile, so upstream IPs stay correct\n- handle_deploy creates the route from the spec's network.public/domain/https block\n- public deployments are no longer host-published (they are reached via the proxy)\n\nBumps to 0.1.8. Adds reconcile regression tests.",
          "timestamp": "2026-06-08T10:00:42Z",
          "url": "https://github.com/helyos-labs/helyos-core/commit/a6f3db1702ac28a90cde47c3f039841e53d2f609"
        },
        "date": 1782730747736,
        "tool": "cargo",
        "benches": [
          {
            "name": "parse_minimal_spec",
            "value": 3573,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "parse_full_spec",
            "value": 23666,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/5",
            "value": 340,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_spread/20",
            "value": 1331,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/5",
            "value": 340,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "scheduler_binpack/20",
            "value": 1329,
            "range": "± 3",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}