# 🚧🚧 UNDER CONSTRUCTION 🚧🚧

## Bem vindo ao repositório do To-do list.

Aqui você encontra os detalhes e instruções de como rodar e ter acesso a aplicação desenvolvida como teste técnico da Firebox Software Solutions.

### Guia de Instalação

1. Clone o repositório do projeto:

- `git clone git@github.com:thiago-mota/teste-pratico-firebox.git`.

- Entre na pasta do repositório que você acabou de clonar:
  - `cd teste-pratico-firebox`

2. Entre na pasta do repositório que você acabou de clonar:

   - `cd teste-pratico-firebox`.

3. Inicialize os serviços node e db:
   - `docker compose up -d`.

- Verifique se as portas definidas no docker-compose não estão sendo utilizadas. Se necessário, altere as portas de acordo com sua disponibilidade.

- Esses serviços irão inicializar um container chamado `todolist` e um serviço chamado `todolist_db`.

4. Instalando as dependências do projeto:

- conecte-se ao terminal interativo do container `todolist`:
  - `docker exec -it todolist bash`.
  - ⚠️ Todos os comandos contidos no `package-json` devem ser executados **DENTRO** do container.
- instale as dependências do projeto:
  - `npm install`
