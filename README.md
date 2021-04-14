# API Project backend

### API de controle de usuario e itens favoritados

## Tabela de conteúdos

- [Sobre](https://github.com/LeonardoCavachini/Api-project-frontend#Sobre)
- [Instalação](https://github.com/LeonardoCavachini/Api-project-frontend#Instalação)
- [Como-usar](https://github.com/LeonardoCavachini/Api-project-frontend#Como-usar)
- [Tecnologias](https://github.com/LeonardoCavachini/Api-project-frontend#Tecnologias)

## Sobre

API que add/update usuários e add/Remove item favoritados.

## Instalação

#### Pré-requisitos

Certifique-se de ter instalado em sua maquina estas ferramentas: Git, Node.js, e um editor de textos como o VSCode.

#### Rodando a aplicação localmente

1. Inicie o projeto backend:

para iniciar o porjeto no backend voĉe precisará fazer o clone do projeto no repositorio do backend.

- `git clone https://github.com/LeonardoCavachini/Api-project-backend.git`

- `cd Api-project-backend`

- adicione um arquivo `.env` na raiz do projeto com as sehuintes vaiaveis de ambiente.

MYSQL_USER=`exemplo: root`

MYSQL_PASSWORD=`exemplo: 123`

HOSTNAME=`exemplo: localhost`

PORT_NUMBER=`exemplo: 3306`

DB_NAME=`exemplo: meu-db`

- Inicie o projeto com `npm start`

  O projeto irá iniciar o backend na porta 3001.

## Como Usar

- no endPoint `http://localhost/login`, o usuário envia ddaos como `emial` e `senha` para gerar um token, caso eles existam no bonco de dados.

- no endPoint `/profile/:id`, o usuário pode alterar os dados do usuario no banco, necessario passar o `id` na barra de endereço.

- no endPoint(`/register`), o usuario envia dados como `emial` e `senha` para serem inseridos no banco de dados.

## Tecnologias

Tecnologias utilizadas para construção da aplicação:

- Node
- Express

Ferramentas para controle e organização de código:

- ESLint
- Git
