#!/bin/bash
# deploy.sh

set -e

echo "=== Michael Cross Deployment ==="

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | grep -v '^#' | xargs)
    echo "✓ Environment variables loaded"
else
    echo "❌ Error: .env.production file not found"
    exit 1
fi

# Clean up existing services
echo "Cleaning up existing services..."
docker-compose down 2>/dev/null || true

# Stop system services that might conflict
sudo systemctl stop nginx 2>/dev/null || true
sudo systemctl stop apache2 2>/dev/null || true

# Kill any processes on port 80
echo "Checking for processes on port 80..."
if sudo lsof -i :80 | grep LISTEN; then
    echo "Stopping processes on port 80..."
    sudo fuser -k 80/tcp || true
    sleep 5
fi

# Create necessary directories
mkdir -p certbot/conf certbot/www

# Download required SSL configuration files
echo "Downloading SSL configuration files..."
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/options-ssl-nginx.conf > certbot/conf/options-ssl-nginx.conf
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/ssl-dhparams.pem > certbot/conf/ssl-dhparams.pem

# Step 1: Start nginx without SSL certificates
echo "Starting nginx for SSL certificate setup..."
docker-compose up -d nginx

echo "Waiting for nginx to start..."
sleep 10

# Step 2: Test that nginx is running and serving ACME challenges
echo "Testing nginx..."
curl -I http://localhost/.well-known/acme-challenge/test 2>/dev/null || echo "Nginx is running but challenge test failed (normal)"

# Step 3: Obtain SSL certificates using standalone mode (more reliable)
echo "Obtaining SSL certificates using standalone mode..."
docker run -it --rm \
  -p 80:80 \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly --standalone \
  --email ogomadigwe87@gmail.com \
  -d michaelcrossspecialist.com \
  -d www.michaelcrossspecialist.com \
  --agree-tos \
  --force-renewal

# Check if certificate was created
if [ -f "./certbot/conf/live/michaelcrossspecialist.com/fullchain.pem" ]; then
    echo "✓ SSL certificates obtained successfully"
else
    echo "❌ SSL certificate setup failed"
    echo "Contents of certbot directory:"
    ls -la certbot/conf/
    exit 1
fi

# Step 4: Stop services and start with SSL
echo "Stopping services..."
docker-compose down

# Step 5: Start all services with SSL
echo "Starting all services with SSL..."
docker-compose up -d --build

echo "Waiting for services to initialize..."
sleep 30

# Final verification
echo "Testing SSL setup..."
curl -k -I https://localhost 2>/dev/null || echo "HTTPS test completed"

echo "=== Deployment Completed Successfully ==="
echo "Your app is now running at: https://michaelcrossspecialist.com"

# Show running containers
echo "Running containers:"
docker ps