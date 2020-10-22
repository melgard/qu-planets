FROM nginx
COPY ./dist/planets /usr/share/nginx/html
EXPOSE 80
