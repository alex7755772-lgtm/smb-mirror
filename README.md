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

## Pull image
If you want to run this on another PC without building locally, pull the published image:

```bash
docker pull ghcr.io/alex7755772-lgtm/smb-mirror:latest
docker run -d --name smb-mirror -p 5800:5800 \
	-e TZ=America/Edmonton \
	-e PORT=5800 \
	-e MAX_JOB_RUNTIME_MINUTES=1440 \
	-v "$PWD/config:/app/config" \
	-v "$PWD/data:/app/data" \
	-v /mnt:/mnt \
	--restart unless-stopped \
	--init \
	ghcr.io/alex7755772-lgtm/smb-mirror:latest
```
