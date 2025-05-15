Absolutely — here's a complete `README.md` you can include in your Astro project root for future redeployment and documentation:

---

````markdown
# 🚀 Astro Project Deployment (xpose.es)

This guide covers how to deploy your Astro site using **Docker**, **Nginx**, and **HTTPS with Certbot** on a VPS.

---

## ✅ Prerequisites

- VPS with Ubuntu/Debian
- Domain `xpose.es` pointing to your VPS IP
- Installed:
  - Docker & Docker Compose (`sudo apt install docker.io docker-compose`)
  - Nginx (`sudo apt install nginx`)
  - Certbot (`sudo apt install certbot python3-certbot-nginx`)

---

## 📦 1. Dockerize the Astro Project

### Dockerfile

```Dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "dist", "-l", "3000"]
````

### .dockerignore

```
node_modules
dist
.dockerignore
Dockerfile
*.log
```

---

## 🐳 2. Build and Run Docker Container

```bash
docker build -t astro-app .
docker run -d -p 4321:3000 --name astro-container astro-app
```

> This maps the Astro app (inside container on port 3000) to host port 4321.

---

## 🌐 3. Configure Nginx Reverse Proxy

### Create Nginx site config

```bash
sudo nano /etc/nginx/sites-available/xpose.es
```

Paste:

```nginx
server {
    listen 80;
    server_name xpose.es www.xpose.es;

    location / {
        proxy_pass http://localhost:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name xpose.es www.xpose.es;

    ssl_certificate /etc/letsencrypt/live/xpose.es/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/xpose.es/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://localhost:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the config:

```bash
sudo ln -s /etc/nginx/sites-available/xpose.es /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔐 4. Enable HTTPS with Certbot

```bash
sudo certbot --nginx -d xpose.es -d www.xpose.es
```

Choose the **redirect** option to force HTTPS.

---

## 🔁 5. Auto-Renew SSL

Certbot installs auto-renew automatically. Test with:

```bash
sudo certbot renew --dry-run
```

---

## 🔄 6. Updating the Project

After making changes to your Astro site:

```bash
docker stop astro-container
docker rm astro-container
docker build -t astro-app .
docker run -d -p 4321:3000 --name astro-container astro-app
```

---

## ✅ 7. Test Everything

* Visit `https://xpose.es` — you should see your Astro app.
* Run `curl http://localhost:4321` on VPS to verify Docker is serving the site.
* Check `docker ps` to confirm the container is running and correctly mapped.

---

## 🗂️ Optional Improvements

* Convert to Docker Compose for easier updates
* Add CI/CD via GitHub Actions or Git hooks
* Use `ufw` to restrict public ports

---

Made with ❤️ for `xpose.es`

```

---

Let me know if you'd like a version tailored for GitHub (with badges, deploy diagrams, or Compose setup).
```
