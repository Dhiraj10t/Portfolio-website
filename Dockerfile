# 1. Use official Node.js image as the base
FROM node:20-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package.json package-lock.json* yarn.lock* ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Build the Next.js app
RUN npm run build

# ----------------------------
# Production image
# ----------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Copy only the necessary files
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]