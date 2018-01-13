FROM nginx
COPY /dist/index.html /usr/share/nginx/html/index.html
EXPOSE 4200
CMD ["nginx","-g","daemon off;"]
