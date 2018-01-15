#Include alpine base image (Note: Bash is at /bin/sh)
FROM alpine:3.6

#Change system password
RUN echo 'root:Piv3@12345' | chpasswd

#Update & upgrade system
RUN echo "http://dl-4.alpinelinux.org/alpine/v3.5/main" >> /etc/apk/repositories && \
	echo "http://dl-4.alpinelinux.org/alpine/v3.6/main" >> /etc/apk/repositories && \
	echo "http://dl-4.alpinelinux.org/alpine/v3.1/main" >> /etc/apk/repositories && \
	apk update && apk upgrade

#Install nodejs & nginx; Update npm to latest version
RUN apk --no-cache add nodejs=6.9.5-r1 nginx=1.12.2-r1 && \
    npm install --unsafe-perm npm@latest -g && \
    rm -rf /var/cache/apk/*

#Copy nginx configurations
COPY ./nginx-config/default.conf /etc/nginx/conf.d/default.conf
COPY ./nginx-config/nginx.conf /etc/nginx/nginx.conf

#Create project directory
RUN mkdir -p /webserver/PIV4 /run/nginx /ramdrive

#Add piv4 project into container
ADD ./powerclub /webserver/PIV4

#Install angular-cli
RUN npm install --unsafe-perm -g @angular/cli

#Build angular app
WORKDIR /webserver/PIV4/

RUN npm cache verify

RUN npm install; exit 0

RUN ng build --prod --env=prod --aot=true

#Run nginx
CMD ["/usr/sbin/nginx"]

#Expose port
EXPOSE 80
