##  To-do List, Guia de Configuração e Uso ✔︎✔︎✔︎

Aqui você encontra as instruções para rodar e testar a aplicação desenvolvida como teste técnico da Firebox Software Solutions.

O projeto consiste no desenvolvimento de uma API que sirva como gerenciador de tarefas capaz de criar, marcar como concluída e remover tarefas da lista de tarefas.

Principais tecnologias e libs utilizadas para o desenvolvimento do projeto:
- Docker
- Node
- MySQL
- Express
- Axios
- Jest
- React
- Tailwind

### 🪜 Primeiros passos

**Pré-requisitos do Sistema**:

- Docker: [Instalação do Docker](https://docs.docker.com/get-docker/)
- Git: [Instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
<br>

<details open>
  <summary>Guia de Instalação:</summary>

1. Clone o repositório do projeto:

   - `git clone git@github.com:thiago-mota/teste-pratico-firebox.git`

2. Entre na pasta do repositório que você acabou de clonar:
   - `cd teste-pratico-firebox`

3. Verifique se as portas definidas no docker-compose estão sendo utilizadas. Se necessário, altere as portas conforme sua disponibilidade.

4. Crie e inicie os contêineres:
   - `docker-compose up -d --build`

5. Aguarde a instalação das dependências e a criação dos servidores. Isso pode levar algum tempo.

- Esses serviços irão inicializar três contêineres chamados `backend`, `frontend` e `todolist_db`.
- ⚠️ **Importante**: Certifique-se de executar todos os comandos contidos nos `package.json` **DENTRO** dos contêineres.
</details>

### Instalando as dependências do projeto e inicializando os servidores:
   As dependências necessárias para utilização do projeto serão instaladas automaticamente após a utilização do comando `docker-compose up --build`. 

   Havendo a necessidade de conectar-se diretamente aos terminais interativos dos contêineres, instalar as dependências ou inicializar os servidores novamente, siga os passos abaixo:


<details open>
<summary> Para o backend: </summary>

1. Conecte-se ao terminal interativo do container `backend`:

   - `docker exec -it backend bash`

2. Instale as dependências do projeto:

   - `npm install`

3. Inicialize o servidor: - `npm run debug`
</details>

<details open>
<summary> Para o frontend: </summary>

1. Conecte-se ao terminal interativo do container `frontend`:

   - `docker exec -it frontend bash`

2. Instale as dependências do projeto:

   - `npm install`

3. Inicialize o servidor: - `npm start`
</details>


### 🧪 Testando a aplicação

A aplicação é testada de forma abrangente para garantir um funcionamento estável e confiável. Os testes abrangem cenários essenciais para garantir o funcionamento adequado da aplicação, desde a manipulação de dados até a integração com a API.


1. Abra um novo terminal e conecte-se ao terminal interativo do container `backend`:
   - `docker exec -it backend bash`
2. Para os testes de back-end basta rodar o script padrão do jest:
   - `npm test`

- Para verificar a cobertura de testes, basta rodar o seguinte script:
  - `npm run coverage`

#### Arquivo de Teste: `Task Service`

- **Testa funções de serviço**: Aborda funções relacionadas a tarefas, como busca, criação, exclusão e atualização.
- **Cobre operações básicas**: Testa casos como busca de tarefas, criação de novas tarefas e atualização/exclusão de tarefas existentes.

#### Arquivo de Teste: `Task Controller`
- **Testa controladores da API**: Concentra-se nos controladores da API que lidam com chamadas HTTP.
- **Valida endpoints HTTP**: Testa as rotas HTTP, incluindo busca, criação, atualização e exclusão de tarefas.
- **Garante integridade dos dados**: Verifica se os dados retornados e criados estão corretos em relação às ações da API.
