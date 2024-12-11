FROM nginx:latest
COPY build/ /usr/share/nginx/html/fap-frontend
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]

