FROM betree/centos-nginx-nodejs-brunch-sass:latest
MAINTAINER Benjamin Piouffle <benjamin.piouffle@gmail.com>
ARG host_url=localhost

# Prepare
WORKDIR /build

# Cache dependencies
COPY package.json .
RUN npm install

# Copy and build source
COPY . .
RUN npm run build
RUN mv public /var/www
RUN cat nginx.conf | sed "s/SERVER_HOST/$host_url/" > /etc/nginx/nginx.conf
RUN cat /etc/nginx/nginx.conf

# For ssl
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.crt
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.key
#RUN ln -s /etc/nginx/sites-available/default-ssl /etc/nginx/sites-enabled/default-ssl

EXPOSE 80 443
CMD nginx -g "daemon off;"
