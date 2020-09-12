- [teste gcb investimentos](/docs/teste_vaga.md)
- [comandos sequelize](/docs/sequelize_commands.md)
- [documentação api](/docs/api_routes.md)

### Instruções para iniciar

- criar o arquivo `.env.development` usando o `.env.example` como exemplo
- criar o arquivo `.env.production` usando o `.env.example` como exemplo

- rodar o comando para criar a datatable no mysql

```
yarn sequelize db:create
```

- rodar o comando para rodar as migrations

```
yarn sequelize db:migrate
```

- rodar o comando das seeds

```
yarn sequelize db:seed:all
```

- rodar o comando `yarn prod` para rodar em ambiente de produção ou `yarn dev` para rodar em ambiente de desenvolvimento

## Ferramentas utilizadas frontend

- react
- styled components
- react router
- axios

## Ferramentas utilizadas backend

- express
- sequelize
