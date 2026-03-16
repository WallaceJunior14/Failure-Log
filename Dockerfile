# Usa uma imagem leve do Node.js
FROM node:22-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (otimiza o cache do Docker)
COPY package*.json ./
COPY prisma ./prisma/

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Gera o Prisma Client dentro do container
RUN npx prisma generate

# Expõe a porta que o Express vai usar
EXPOSE 3032

# Comando para rodar a API
CMD ["npm", "run", "dev"]