# Use Node 20 Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of your source code
COPY . .

# Build Astro app
RUN npm run build

# Expose port 3000 (default for Node adapter)
EXPOSE 3000

# Start the server
CMD ["node", "dist/server/entry.mjs"]
