# db-basics


## Links

- [POSTMAN DOCUMENTACION](https://documenter.getpostman.com/view/17897182/2s9YeD9Dan)

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

### Documentacion POSTMAN

Podes probar todos los endpoint simplemente importando esta colección a tu postman local

[Documentacion 🚀🚀🚀🚀🚀](https://documenter.getpostman.com/view/17897182/2s9YeD9Dan)

## Authors

***

* [github/josemiranda989](https://github.com/josemiranda989)

* [github/guidomaimone](https://github.com/GuidoMaimone)

## Abierto a Pull Request 

- Agregar más consultas con relaciones
- Encriptacion de contraseñas (bycriptjs)
- Agregar paranoid para borrado lógico
- Validaciones con sequelize