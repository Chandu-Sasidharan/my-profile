# My profile website

Static profile site built with Vite and deployed to a DigitalOcean droplet behind the Caddy edge proxy.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Docker (prod)

Build and run locally:

```bash
docker build -f Dockerfile.prod -t my-profile:local .
docker run --rm -p 8080:80 my-profile:local
```

## Deployment (GitHub Actions)

Workflow: `.github/workflows/build-push-deploy.yml`

On `prod` branch push:
1. Build and push `ghcr.io/<owner>/my-profile` (tags: `latest`, `sha`).
2. SSH into the droplet and run `docker compose -f docker-compose.prod.yml pull` + `up -d`.

### Required secrets

- `DROPLET_HOST`
- `DROPLET_USER`
- `DROPLET_SSH_KEY`
- `GHCR_PAT`

### Droplet setup

- Repo path: `/opt/my-profile` (or update the workflow script).
- Docker + Docker Compose installed.
- External network: `docker network create edge_net`.
- Caddy edge proxy should route your domain to `my-profile:80`.
