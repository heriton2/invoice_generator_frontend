# Stage 1: Construir a aplicação
FROM node:16.14 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@9.7.1
RUN npm install -g @angular/cli@16.1.0   # Adicionando a instalação do Angular CLI

RUN npm install

COPY . .
RUN ng build   # Utilizando o comando ng build para construir a aplicação

# Stage 2: Implantar a aplicação no servidor nginx
FROM nginx:1.21-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
