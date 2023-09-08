# 🚧🚧 README UNDER CONSTRUCTION 🚧🚧

## Bem vindo ao repositório do To-do list.

Aqui você encontra os detalhes e instruções de como rodar e ter acesso a aplicação desenvolvida como teste técnico da Firebox Software Solutions.

### 🪜 Primeiros passos

<details open>
  <summary>Guia de Instalação:</summary>

1. Clone o repositório do projeto:

- `git clone git@github.com:thiago-mota/teste-pratico-firebox.git`

2. Entre na pasta do repositório que você acabou de clonar:

3. Inicialize os serviços node e db:
   - `docker-compose up -d --build`

- Verifique se as portas definidas no docker-compose não estão sendo utilizadas. Se necessário, altere as portas de acordo com sua disponibilidade.

- Esses serviços irão inicializar um container chamado `todolist` e um serviço chamado `todolist_db`.

4. Instalando as dependências do projeto:

- Conecte-se ao terminal interativo do container `todolist`:
  - `docker exec -it todolist bash`
- ⚠️ Todos os comandos contidos no `package-json` devem ser executados **DENTRO** do container.
- Instale as dependências do projeto:
  - `npm install`

5. Inicialize o servidor:
    - `npm run debug`
</details>


### 🧪 Testando a aplicação
<details open>
  <summary> Rodando os testes:</summary>

  1. Abra um novo terminal e conecte-se ao terminal interativo do container `todolist`:
      - `docker exec -it todolist bash`
  2. Para os testes de back-end basta rodar o script padrão do jest:
      - `npm test`
  - Caso você queira verificar a cobertura de testes, basta rodar o seguinte script:
      - `npm run coverage`
  - A camada model não está sendo considerada no coverage.
  3. ⚠️ Os testes do front-end serão feitos com Cypress, mais informações em breve.

    

</details>
