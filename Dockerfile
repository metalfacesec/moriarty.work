FROM alpine:3.14

RUN mkdir /www

COPY ./build/ /www
COPY nginx.conf /etc/nginx/http.d/default.conf

RUN apk add --no-cache nginx nodejs npm
#RUN mkdir -p /run/nginx
#RUN touch /run/nginx/nginx.pid
#RUN adduser -D -g 'www' www
#RUN chown -R www:www /var/lib/nginx
#RUN chown -R www:www /www

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
