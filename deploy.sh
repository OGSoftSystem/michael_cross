#!/bin/bash

set -e

NEW_APP_DIR="/home/deployer/michael-cross"
NGINX_CONF_DIR="/home/deployer/wazobiahms/nginx"
DOMAIN="michaelcrossspecialist.com"

echo "Starting deployment for $DOMAIN..."

cd $NEW_APP_DIR || exit 1

# Step 1: Stop container
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down

# Step 2: Backup and set maintenance mode manually
echo "Please manually update nginx.conf to maintenance mode, then press Enter..."
echo "Replace the location block with:"
echo "    return 200 \"Michael Cross Specialist - Maintenance Mode\\nPlease wait...\";"
echo "    add_header Content-Type text/plain;"
read -p "Press Enter after updating nginx.conf..."

docker exec nginx-proxy nginx -t && docker exec nginx-proxy nginx -s reload
echo "✅ Maintenance mode activated"

# Step 3: SSL certificate (same as before)
if [ ! -f "/home/deployer/wazobiahms/certbot/conf/live/$DOMAIN/fullchain.pem" ]; then
    echo "Creating SSL certificate..."
    docker stop nginx-proxy || true
    docker run -it --rm \
      -p 80:80 \
      -v /home/deployer/wazobiahms/certbot/conf:/etc/letsencrypt \
      -v /home/deployer/wazobiahms/certbot/www:/var/www/certbot \
      certbot/certbot certonly --standalone \
      -d $DOMAIN -d www.$DOMAIN \
      --email ogomadigwe87@gmail.com \
      --agree-tos --non-interactive
    docker start nginx-proxy || true
    echo "✅ SSL certificate created"
else
    echo "✅ SSL certificate exists"
fi

# Step 4: Deploy app
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
sleep 15

# Step 5: Restore proxy config manually
echo "Please manually update nginx.conf to proxy mode, then press Enter..."
echo "Replace with proxy_pass to michael-cross:3000"
read -p "Press Enter after updating nginx.conf..."

docker exec nginx-proxy nginx -t && docker exec nginx-proxy nginx -s reload
echo "✅ Nginx config updated"

# ... rest of verification steps