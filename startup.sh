#!/bin/bash

# Startup script for Azure Linux App Service
# This script runs when the container starts

echo "Starting Voxelbox application..."

# Set NODE_ENV to production
export NODE_ENV=production

# Install dependencies if needed (usually not required in production)
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci --only=production
fi

# Start the Next.js application
echo "Starting Next.js server..."
npm start