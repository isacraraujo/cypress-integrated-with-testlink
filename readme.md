# Projeto Cypress + Axios + TestLink

Este guia apresenta o passo a passo para preparar um projeto de testes automatizados com Cypress e integrar com o TestLink utilizando Axios e XML-RPC.

## Requisitos

- [Node.js](https://nodejs.org/) instalado (recomenda-se a versão LTS)
- Permissões para acesso à API do TestLink (API Key)
- ID do projeto, plano de teste e caso de teste no TestLink
- Acesso à URL XML-RPC do TestLink (ex: `https://seu-servidor-testlink/lib/api/xmlrpc/v1/xmlrpc.php`)

## Passos para configuração

Execute os seguintes comandos no terminal para configurar o ambiente de testes:

### 1. Instala todas as dependências do projeto
```sh
npm install
```
Este comando instala todas as dependências citadas em package.json

## Executando o Cypress
Rodar os testes utilizando o Google Chrome em modo headless:
```sh
npx cypress run --browser chrome
```

Assim que instalada as dependências conforme os requisitos, configurado e executado, automaticamente os testes poderão ser consultados nos relatórios do Testlink.