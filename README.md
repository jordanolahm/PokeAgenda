# PokeAgenda
Agenda de Pokemon em Construção com react e bibliotecas afins.

ETAPA DE BACKEND
- Autenticação Login
- instalar npm
-> Instalação de packages para Autenticação, rota, validação e transições de banco/servidor

$ npm init -y

$ npm i koa koa-router @koa/cors koa-bodyparser boom fastest-validator sequelize sequelize-cli

$ npm i sqlite3

$ npm i -D nodemon

%%instalar Postman para teste de requisição de porta%%

%%vamos trabalhar com requisição do banco %%
$ ./node_modules/.bin/sequelize init

%%modelando banco pelo sequelize%%
$  npx sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

%%migração do banco%%
$ npx sequelize db:migrate

%%ler arquivo node%%
$ node src/main.js

%%Instalar o token para validação%%
$ npm i jsonwebtoken

ETAPA DE FRONTEND
- Instalação dos pacotes para desenvolvimento de telas 
$ npm i axios react-router react-router-dom history normalize.css

%%Para consumir application, rotas e normalização do css para desconsiderar as características padrões da página do Browser%%

- Incluir os formulários
$ yarn add formik yup

%%Lembrando que pode ser instalado em uma linha de código com npm ou yarn%%

Caso for utilizar um back end para controlar o login e senha. 

Para sugestão evolutiva, vamos sugerir nova atribuição de login com verificação direta. 
