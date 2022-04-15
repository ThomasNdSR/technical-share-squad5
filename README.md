# technical-share
## FCamara - hackaton - squad 5

![N|Solid](https://d335luupugsy2.cloudfront.net/images%2Flanding_page%2F2265963%2Fprograma-de-formacao-logo.png)

## Executando a aplicação em ambiente de desnevolvimento

A aplicação poderá ser executada dentro do docker ou utilizando os scripts pelo o terminal

## Utilizando o Docker
Dentro da pasta ymls, contem o arquivo docker-compose.yml, que ira orquestrar a nossa aplicação, no terminal, entre na pasta e execute o comando docker-compose up

```sh
cd ./ymls
docker-compose up
```
criando as imagens e subindo os três contêineres:

- front-technical_share;
        - imagem:front-end-technical_share:1.0
- back-technical_share;
        - imagem:back-end-technical_share:1.0
- mongo-technical_share.
        - imagem: mongo:4.4.6

O banco ira subir vazio, precisando ser populado com os dados modelos, isto pode ser realizado no seu navegador, enviando a seguinte requisição:

```sh
localhost:8000/seed
```
No docker a sua aplicação ira rodar na porta 3000 ou na 8080, dependendo da disponibilidade, com os três contêineres em execução, a estara pronta para uso.

## Utilizando Script via terminal

Será utilizado o banco de dados mongo Atlas, sendo conectado ao servidor, assim que a aplicação for executada, e necessário subir  as aplicações do front-end e do back-end em terminais separados.

### Back-End

```sh
cd ./back-end
npm install
npm run dev
```
A aplicação será executada na porta 8000.
```sh
127.0.0.1:8000
```
com o servidor rodando, podemos executar o front-end.

### Front-End

Abra um novo terminal e entre na pasta front-end, dentro da pasta execute o spript npm Install  para a instalação das dependências do projeto, em seguida execute o comando npm run start para subir a aplicação

```sh
cd ./front-end
npm install
npm run start
```

A aplicação será executada na porta 3000.
```sh
127.0.0.1:3000
```
Com os dois scripts rodando, a aplicação estara pronta para uso
