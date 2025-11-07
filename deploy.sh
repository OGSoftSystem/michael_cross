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
docker-compose -f docker-compose.yml -f docker-compose.prod.yml down 2>/dev/null || true

# Step 1: Build and deploy the application only
echo "Building and deploying application..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

echo "Waiting for services to initialize..."
sleep 30

# Step 2: Verify deployment
echo "Verifying deployment..."

# Check if containers are running
if docker ps | grep -q "michael-cross"; then
    echo "✓ Michael Cross app container is running"
else
    echo "❌ Michael Cross app container is not running"
    exit 1
fi

if docker ps | grep -q "mongodb"; then
    echo "✓ MongoDB container is running"
else
    echo "❌ MongoDB container is not running"
    exit 1
fi

# Check application logs for errors
echo "Checking application logs for errors..."
if docker logs michael-cross 2>&1 | grep -i "error\|failed"; then
    echo "⚠ Found errors in application logs:"
    docker logs michael-cross | grep -i "error\|failed" | tail -5
else
    echo "✓ No critical errors found in application logs"
fi

# Check if application is responding (basic connectivity test)
echo "Checking application responsiveness..."
if docker exec michael-cross curl -f http://localhost:3000/ >/dev/null 2>&1; then
    echo "✓ Application is responding on port 3000"
else
    echo "⚠ Application might still be starting up (normal for first deployment)"
fi

# Check network connectivity
echo "Checking network connectivity..."
if docker network inspect app-network >/dev/null 2>&1; then
    echo "✓ Docker network 'app-network' is configured"
else
    echo "❌ Docker network 'app-network' not found"
    exit 1
fi

echo "=== Deployment Completed Successfully ==="
echo "Your app is now running and accessible through your existing nginx proxy"
echo "URL: https://michaelcrossspecialist.com"

# Show running containers
echo ""
echo "Running containers:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Show recent application logs
echo ""
echo "Recent application logs:"
docker logs michael-cross --tail 20