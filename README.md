# 🚧🚧 README UNDER CONSTRUCTION 🚧🚧

## Bem vindo ao repositório do To-do list.

Aqui você encontra as instruções para rodar e testar a aplicação desenvolvida como teste técnico da Firebox Software Solutions.

O projeto consiste no desenvolvimento de uma API que sirva como gerenciador de tarefas capaz de criar, marcar como concluída e remover tarefas da lista de tarefas.

Principais tecnologias e libs utilizadas para o desenvolvimento do projeto:
<br>
Docker | Node | MySQL | Express | axios | Jest | React | Tailwind |

### 🪜 Primeiros passos

<details open>
  <summary>Guia de Instalação:</summary>

1. Clone o repositório do projeto:

- `git clone git@github.com:thiago-mota/teste-pratico-firebox.git`

2. Entre na pasta do repositório que você acabou de clonar:

3. Verifique se as portas definidas no docker-compose não estão sendo utilizadas. Se necessário, altere as portas de acordo com sua disponibilidade.

4. Inicialize os serviços node e db:
   - `docker-compose up -d --build`

5. Aguarde a instalação das dependencias e a criação dos servidores. Isso pode levar algum tempo.

- Esses serviços irão inicializar três containeres chamados `backend`, `frontend` e `todolist_db`.
- ⚠️ Todos os comandos contidos nos `package-json` devem ser executados **DENTRO** do containeres.
</details>

### Instalando as dependências do projeto e inicializando os servidores:
   As dependências necessárias para utilização do projeto serão instaladas automaticamente após a utilização do comando `docker-compose up --build`. Ainda assim, havendo a necessidade de instalar novas dependências ou se conectar diretamente aos terminais interativos dos containeres novamente, siga os passos abaixo:


<details open>
<summary> Instalando e inicializando o backend: </summary>

1. Conecte-se ao terminal interativo do container `backend`:

   - `docker exec -it backend bash`

2. Instale as dependências do projeto:

   - `npm install`

3. Inicialize o servidor: - `npm run debug`
</details>

<details open>
<summary> Instalando e inicializando o frontend </summary>

1. Conecte-se ao terminal interativo do container `frontend`:

   - `docker exec -it frontend bash`

2. Instale as dependências do projeto:

   - `npm install`

3. Inicialize o servidor: - `npm start`
</details>


### 🧪 Testando a aplicação

<details open>
  <summary> Rodando os testes do backend:</summary>

1. Abra um novo terminal e conecte-se ao terminal interativo do container `backend`:
   - `docker exec -it backend bash`
2. Para os testes de back-end basta rodar o script padrão do jest:
   - `npm test`

- Para verificar a cobertura de testes, basta rodar o seguinte script:
  - `npm run coverage`
- A camada model não está sendo considerada no coverage.
</details>

<details open>
<summary>Rodando os testes do frontend:</summary>
  ⚠️ Os testes do front-end serão feitos com Cypress, mais informações em breve.

</details>
