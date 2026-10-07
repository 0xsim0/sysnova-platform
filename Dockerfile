FROM node:22-bookworm-slim@sha256:43ac6c60b8f89723f746e8a92ce91abd5017e627ce1ddfe4238355d3a30b772c AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1



#Abhägigkeiten installieren und Anwendung bauen
FROM base AS builder


COPY package.json package-lock.json ./
RUN npm ci


COPY . .
RUN npm run build -- --webpack

#Laufzeit-image
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir -p .next/cache && chown node:node .next/cache

USER node
EXPOSE 3000
CMD ["node", "server.js"]
