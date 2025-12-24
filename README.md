# nadabarkada.com

The NadaBarkada site — a simple static website for our crew.

## Live Site

- https://nadabarkada.com

## Hosting / Deployment

This site is hosted on **GitHub Pages**.

- **Repo:** `spaceshiptrip/nadabarkada.com`
- **Pages source:** `main` branch, `/` (root)
- **Custom domain (CNAME):** `nadabarkada.com`

### Where to change Pages settings

GitHub → Repo → **Settings** → **Pages**

You should see:

- **Build and deployment**
  - Source: **Deploy from a branch**
  - Branch: `main`
  - Folder: `/ (root)`
- **Custom domain:** `nadabarkada.com`
- **Enforce HTTPS:** enabled (recommended)

## Local Development

Because this is a static site, you can open `index.html` directly in a browser, but using a local server is better for relative paths.

### Option A: Python (recommended)

```bash
python3 -m http.server 8000

