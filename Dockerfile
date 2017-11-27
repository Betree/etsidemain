# ---- Build ----

FROM betree/centos-nginx-nodejs-brunch-sass:latest as builder
MAINTAINER Benjamin Piouffle <benjamin.piouffle@gmail.com>

# Prepare
WORKDIR /build

# Cache dependencies
COPY package.json .
RUN npm install

# Copy and build source
COPY . .
RUN npm run build

# ---- Release ----

FROM kyma/docker-nginx
COPY --from=builder /build/public/ /var/www

# For ssl
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.crt
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.key
#RUN ln -s /etc/nginx/sites-available/default-ssl /etc/nginx/sites-enabled/default-ssl

EXPOSE 80 443
CMD 'nginx'
