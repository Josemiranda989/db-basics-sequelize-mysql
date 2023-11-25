# db-basics


## Links

- [Simple Queries](https://sequelize.org/master/manual/model-querying-basics.html#simple-select-queries)

- [Operators](https://sequelize.org/v4/manual/tutorial/querying.html#operators)

- [Capacitacion Docente](https://docs.google.com/presentation/d/1mNypMVgPWAlRlxG38WpSg4B_hAUwRln7mIH1xL3dDCk/edit?usp=sharing)


## Ejecutar Migraciones

### 1. Crear la Base de Datos

Asegúrate de haber creado la base de datos antes de ejecutar las migraciones.

```bash
npx sequelize-cli db:create
```

### 2. Ejecutar Migraciones

Aplica todas las migraciones pendientes para crear las tablas en la base de datos.

```bash
npx sequelize-cli db:migrate
```

## Ejecutar Seeders

### 1. Ejecutar Seeders

Llena las tablas con datos de ejemplo usando seeders.

```bash
npx sequelize-cli db:seed:all
```

## Gestión Adicional

### Deshacer la Última Migración

Si necesitas deshacer la última migración:

```bash
npx sequelize-cli db:migrate:undo
```

### Deshacer Todos los Seeders

Si necesitas deshacer todos los seeders:

```bash
npx sequelize-cli db:seed:undo:all
```

## Authors

***

* [github/josemiranda989](https://github.com/josemiranda989)

* [github/guidomaimone](https://github.com/GuidoMaimone)