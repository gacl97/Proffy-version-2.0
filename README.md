<p align="center">
   <img src=".github/logo.svg" width="200"/>
</p>


# Proffy 2.0

> Projeto pela NWL Rocketseat para cadastro de aulas de professores.

<br />
<p align="center"><img src=".github/landing-page.svg"/></p>
<p align="center"><img src=".github/teacher-form.svg"/></p>

---



# :pushpin: Índice

  - [Funcionalidades](#funcionalidades)
  - [Sobre](#sobre)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Como usar](#como-usar)


<a id="funcionalidades"></a>

# :rocket: Funcionalidades

- Adicionar uma nova turma;
- Listar turmas que já foram cadastradas;

<a id="sobre"></a>

# :clipboard:	Sobre

O <strong>Proffy</strong> é uma simples aplicação web para cadastros e listagem de turmas. Alunos podem listar turmas específicas de acordo com dia da semana, horário inicial e pela matéria.

Essa aplicação foi construída na trilha <strong>Boost</strong> da <strong>Next Level Week</strong> distribuída pela [Rocketseat](https://rocketseat.com.br/).

<a id="tecnologias-utilizadas"></a>

# :wrench: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias e padrões: 

- ReactJS
    - Styled-components
    - TypeScript
    - Axios
    - Yup validation
    - Hook use-react-form para os formulários
- NodeJS
  - Typeorm
  - Repository pattern
  - Dependency injection pattern
  - Service pattern
  - Express
  - PostgresSQL
  - TypeScript
- Eslint
- Prettier
- Docker

<a id="como-usar"></a>


# :construction_worker: Como usar
1. Faça um clone :

```sh
  $ git clone https://github.com/gacl97/Proffy-version-2.0.git
```
2. Instalar as dependências: 
```sh
  $ yarn
```
3. Configurando banco de dados com docker: 
```sh
  $ docker run --name postgres_nwl -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=proffy_database -p 5432:5432 -d postgres

```
4. Executando a aplicação backend:
```sh
  $ yarn dev:server
```
5. Executando a aplicação frontend:
```sh
  $ yarn start
```
6. Abrir no navegador a url:
```
  localhost:3333
```