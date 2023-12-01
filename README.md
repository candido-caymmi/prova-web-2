# Prova de Web 2: API CRUD RESTful usando Node.js, Express.js e Sequelize

Esta é uma aplicação CRUD simples para gerenciar informações de usuários.

## Como Executar
### 1. Clone o repositório

### 2. Instale as dependências
```bash
npm install
```
### 3. Inicie o servidor 
```
node src/index.js
```

## Rotas
### Criar Usuário:

- **Método:** POST
- **URL:** http://localhost:8000/usuario
- **Corpo:** JSON `{ "nome": "Nome do Usuário", "idade": 25, "email": "usuario@example.com" }`

### Obter Informações de um Usuário:

- **Método:** GET
- **URL:** http://localhost:8000/usuario/:id

### Atualizar Informações de um Usuário:

- **Método:** PATCH
- **URL:** http://localhost:8000/usuario/:id
- **Corpo:** JSON `{ "nome": "Novo Nome", "idade": 26, "email": "novousuario@example.com" }`

### Excluir Usuário:

- **Método:** DELETE
- **URL:** http://localhost:8000/usuario/:id
