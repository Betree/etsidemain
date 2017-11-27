FROM kyma/docker-nginx
COPY public/ /var/www

# For ssl
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.crt
#ADD /etc/letsencrypt/live/xxx/cert.pem /etc/nginx/ssl/server.key
#RUN ln -s /etc/nginx/sites-available/default-ssl /etc/nginx/sites-enabled/default-ssl

CMD 'nginx'