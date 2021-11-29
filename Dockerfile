FROM nginx:mainline-alpine
LABEL maintainer="leiax00 <leiax00@outlook.com>"
WORKDIR /usr/share/nginx/html
COPY dist/ ./
COPY default.conf /etc/nginx/conf.d