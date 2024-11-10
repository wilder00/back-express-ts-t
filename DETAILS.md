# sequelize create models

## Generate a migration by creating a model

Then it should be modified to allow typescript.

```bash
pnpm exec sequelize-cli model:generate --name Person --attributes name:string
```

## Generate a seeder

should be modified to typescript

```bash
pnpm exec sequelize-cli seed:generate --name person
```

## Generate a migration by itself

should be modified to typescript

```bash
pnpm exec sequelize-cli migration:generate --name migration-skeleton
```
