# build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# runtime stage
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Minimal nginx conf for a static homepage
# - cache hashed assets under /assets
# - serve /index.html at root
RUN printf '%s\n' \
  'server {' \
  '  listen 80;' \
  '  server_name _;' \
  '  root /usr/share/nginx/html;' \
  '  index index.html;' \
  '  location = / { try_files /index.html =404; }' \
  '  location = /index.html { try_files /index.html =404; }' \
  '  location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; try_files $uri =404; }' \
  '  location /icons/  { add_header Cache-Control "public, max-age=86400"; try_files $uri =404; }' \
  '  location = /favicon.ico { try_files /favicon.ico =404; }' \
  '}' \
  > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]