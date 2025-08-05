#!/bin/bash

# Startup script for Azure Linux App Service
# This script runs when the container starts

echo "Starting Voxelbox application..."

# Set environment variables
export NODE_ENV=production
export PORT=${PORT:-8080}

# Navigate to app directory
cd /home/site/wwwroot

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --production
fi

# Build the application if .next doesn't exist
if [ ! -d ".next" ]; then
    echo "Building Next.js application..."
    npm run build
fi

# Start the Next.js application
echo "Starting Next.js server on port $PORT..."
npm start