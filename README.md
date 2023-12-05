# PROJETO BIBLIOTECH

### Requisitos
- [X] [VSCode](https://code.visualstudio.com/download)
- [X] [GitBash](https://git-scm.com/downloads)
- [X] [Node v16.15.1 ou superior](https://nodejs.org/en/download)
- [X] [Xampp](https://www.apachefriends.org/download.html) ou outro pacote de servidores (que inclua o MySql)
- [X] Extensão VSCode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

> Hiperlinks redirecionam para as páginas de download


### Clone o repositório
- Clique no botão *Code*
- Copie o link HTTPS
- Abre o VSCode
- Aperte a tecla ```CTRL + SHIFT + P``` pra acessar o campo de comandos do VSCode
- Pesquise e pressione a tecla *Enter* em ```Git: Clone```
- Cola o link HTTPS do repositório e pressiona *Enter*
- Selecione a pasta desejada para baixar o repositório
- Clica em *Open* se desejar abrir o projeto na janela aberta ou em *Open in New Window* se desejar abrir em uma nova janela

### Banco de dados
- Inicie o servidor MySql
- Execute o script [*Database/Scripts/ddl.sql*](./Database/Scripts/ddl.sql) e [*Database/Scripts/query.sql*](./Database/Scripts/query.sql) no PhpMyAdmin ou terminal MySql
- Opcionalmente, execute o script [*Database/Scripts/dml.sql*](./Database/Scripts/dml.sql) para povoar o banco de dados

### Backend 
- Acesse no terminal CMD a pasta *Backend*
- Utilizando o gerenciador npm, instale as depêndencias do projeto
    - *```npm install express cors mysql```*
    - *```npm i```*
- Incie com node 
    - *```nodemon```*
    - *```node .```*
    - *```node index.js```*

### Frontend
- Utilizando a extensão Live Server, abra o arquivo [*Frontend/Pag inicial/Entrada/index.html*](./Frontend/Pag%20inicial/Entrada/index.html)

## Pastas
- ./Backend (API ou BackEnd MVC)
- ./Database (Diagramas, arquivo de testes Insomnia e scripts MySQL)
- ./Frontend (Interface Web)