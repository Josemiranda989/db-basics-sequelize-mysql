CREATE DATABASE db_basics;

use db_basics;

CREATE TABLE `categorias` (
   `id` INT,
   `nombre` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `historial_compras` (
   `id` INT,
   `usuario_id` INT,
   `producto_id` INT,
   `cantidad` INT,
   `fecha_compra` DATE,
   PRIMARY KEY (`id`)
);

CREATE TABLE `productos` (
   `id` INT,
   `nombre` VARCHAR(50),
   `precio` DECIMAL(10,2),
   `imagen` VARCHAR(150) DEFAULT 'default_img.png',
   `categoria_id` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `usuarios` (
   `id` INT,
   `nombre` VARCHAR(50),
   `correo` VARCHAR(50),
   `contrasena` VARCHAR(150),
   `avatar_url` VARCHAR(150) DEFAULT 'default_avatar.png',
   PRIMARY KEY (`id`)
);


ALTER TABLE `historial_compras` ADD CONSTRAINT `FK_196ad5c2-7f19-493d-b230-f92369991737` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`)  ;

ALTER TABLE `historial_compras` ADD CONSTRAINT `FK_413ce45d-1c18-4005-955c-ae0dbb96888b` FOREIGN KEY (`producto_id`) REFERENCES `productos`(`id`)  ;

ALTER TABLE `productos` ADD CONSTRAINT `FK_5d8b241b-5850-4272-b265-92b730c3c872` FOREIGN KEY (`categoria_id`) REFERENCES `categorias`(`id`)  ;
