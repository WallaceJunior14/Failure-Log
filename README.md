# 🚀 Failure Log API

Um sistema backend robusto inspirado na cultura de *Post-Mortem* e *Blameless Culture*, desenvolvido para registrar erros, impactos técnicos e lições aprendidas durante o ciclo de desenvolvimento de software.

Este projeto foi construído como um laboratório prático para revisar conceitos avançados de Arquitetura de Software, servindo como base técnica para um projeto de extensão acadêmica.

## 📌 Funcionalidades
- **Gestão de Usuários:** Cadastro seguro com criptografia de senhas (Bcrypt).
- **Registro de Falhas:** Documentação do erro, impacto, soluções aplicadas e lições aprendidas.
- **Resolução de Incidentes:** Atualização de status das falhas registradas.

## 🛠️ Tecnologias Utilizadas
- **Node.js & Express:** Motor da API.
- **TypeScript:** Tipagem estática rigorosa.
- **Prisma ORM (v7.5):** Modelagem de dados e migrações.
- **PostgreSQL (v18):** Banco de dados relacional.
- **Docker:** Conteinerização da infraestrutura.
- **tsx:** Execução rápida do TypeScript (resolvendo conflitos nativos de CommonJS/ESM).

---

## ⚙️ Configuração e Instalação (Passo a Passo)

Para rodar este projeto localmente, siga as instruções exatas de configuração de ambiente abaixo.

### 1. Clonar o Repositório e Iniciar o Node
```bash
git clone [https://github.com/WallaceJunior14/failure-log.git](https://github.com/WallaceJunior14/failure-log.git)
cd failure-log-api
```
### 2. Instalar as Dependências
```bash
# Dependências principais
npm install express cors dotenv bcryptjs prisma @prisma/client

# Dependências de desenvolvimento (Tipagens e motor de execução)
npm install -D typescript @types/node @types/express @types/cors @types/bcryptjs tsx
```
### 3. Configuração do TypeScript (tsconfig.json)
```code
{
    "compilerOptions": {
        "target": "es2024",
        "module": "nodenext",
        "rootDir": "./src",
        "outDir": "./dist",
        "esModuleInterop": true,
        "strict": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*", "generated"],
    "exclude": ["node_modules", "dist"]
}
```
### 4. Configuração do Docker e Banco de Dados

```bash
docker-compose up -d
```

### 5. Variáveis de Ambiente e Prisma
Configure as variáveis de ambiente. Deizei um .env.example como referência.
Posteriomente a isso, rode os seguintes comandos:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Configurar o Script e Rodar o Servidor
No seu package.json, garanta que o script de desenvolvimento utiliza o tsx, que é mais moderno e estável que o antigo ts-node-dev:

```code
"scripts": {
    "dev": "tsx watch src/server.ts"
}
```

Rode posteriormente o seguinte comando:

```bash
npm run dev
```