# Sistema de Geração de Faturas - Frontend

Este é o frontend para o sistema de geração de faturas a partir de um arquivo CSV. O objetivo é permitir que os usuários importem um arquivo CSV contendo dados de cobrança e, em seguida, o sistema irá gerar uma fatura com base nesses dados, seguindo um modelo semelhante a uma fatura de cartão de crédito.

A aplicação está disponível online neste link: [https://invoice-generator-frontend-jkjj2v8tf-heriton2.vercel.app/](https://invoice-generator-frontend-jkjj2v8tf-heriton2.vercel.app/)

## Funcionalidades

- Importar um arquivo CSV contendo dados de cobrança.
- Gerar uma fatura com base nos dados importados.
- Visualizar a fatura gerada na tela.
- Baixar a fatura em formato PDF.

## Pré-requisitos

Antes de executar a aplicação localmente, certifique-se de ter as seguintes dependências instaladas:

- Node.js (versão 16.14)
- Angular CLI (versão 16.1.0)
- Outras dependências...

## Instalação

Para executar a aplicação localmente, você pode escolher entre duas opções: a forma tradicional de instalação ou utilizando o Dockerfile fornecido.

### Instalação Tradicional

1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
2. Navegue até o diretório do projeto: `cd seu-projeto`
3. Instale as dependências: `npm install`

### Instalação com Docker

Certifique-se de ter o Docker instalado em sua máquina.

1. Clone este repositório: `git clone https://github.com/seu-usuario/seu-projeto.git`
2. Navegue até o diretório do projeto: `cd seu-projeto`
3. Construa a imagem do Docker: `docker build -t nome-da-imagem .`
4. Execute o contêiner: `docker run -p 80:80 nome-da-imagem`

Após executar os passos acima, a aplicação estará disponível localmente em `http://localhost:80/`.

## Uso

Para iniciar a aplicação localmente, execute os seguintes comandos:

```bash
# Iniciar o servidor de desenvolvimento
ng serve

# Compilar a aplicação para produção
ng build
```

Após executar o comando `ng serve`, a aplicação estará disponível em `http://localhost:4200/`.

## Contribuição

Caso queira contribuir com o projeto, fique à vontade para criar problemas (issues) ou enviar solicitações de recebimento (pull requests).

## Contato

Em caso de dúvidas ou sugestões, entre em contato através do email [heriton2@gmail.com](mailto:heriton2@gmail.com).
