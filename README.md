# SMB Mirror v6

## Main fixes
- Uses Docker Compose `init: true` to help reap child processes.
- Starts rsync in a detached process group.
- Force stop kills the whole rsync process group.
- Cleans job locks on `close`, `exit`, and `error`.
- Adds `/api/health`.
- Adds watchdog handling.
- Uses polling watcher with debounce.

## Modes
Safe mode: copies missing files only using `--ignore-existing`.

Mirror delete mode: optional per job. Uses `--delete`, updates changed files, and removes destination files that no longer exist in the source.

## Speed display
The UI can show speed in Mb/s, MB/s, Gb/s, or GB/s.

## Run
```bash
docker compose down
docker compose up -d --build
```

Open:
```text
http://YOUR_SERVER_IP:5800
```
