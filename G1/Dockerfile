# Usar uma imagem base do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copiar os arquivos HTML, CSS e JS para o diretório do Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Expor a porta 80
EXPOSE 80

# Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]