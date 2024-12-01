FROM node:23-alpine AS base
RUN apk add --update curl && \
  rm -rf /var/cache/apk/*

FROM base AS deps-installer
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package*.json ./
RUN npm i

FROM base AS builder
WORKDIR /app
COPY --from=deps-installer /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "run", "start"]
