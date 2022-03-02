DROP DATABASE IF NOT EXISTS dataBaseProductos;
CREATE DATABASE IF NOT EXISTS dataBaseProductos;
USE dataBaseProductos;

CREATE TABLE IF NOT EXISTS categorias(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(25) NOT NULL,
    fecha_entrada DATETIME DEFAULT current_timestamp;
);

CREATE TABLE IF NOT EXISTS procesadores(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(25) NOT NULL,
    fabricante ENUM ('AMD', 'INTEL'),
    stock INTEGER UNSIGNED NOT NULL,
    modelo VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(250),
    FOREIGN KEY (categoria) REFERENCES categorias(categoria)
);

CREATE TABLE IF NOT EXISTS motherboard(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    categoria VARCHAR(25) NOT NULL,
    fabricante ENUM ('ASROCK', 'ASUS', 'GIGABYTE', 'MSI'),
    stock INTEGER UNSIGNED NOT NULL,
    fecha_lanzamiento DATE,
    FOREIGN KEY (categoria) REFERENCES categorias(categoria)
);

INSERT INTO categorias(categoria)
VALUES  ('Procesador'),
        ('Motherboard'),
        ('Placa de Video'),
        ('Memoria Ram'),
        ('Fuente'),
        ('Perifericos');

INSERT INTO procesadores (categoria, fabricante, modelo, descripcion, fecha_lanzamiento, stock)
VALUES  ('Procesador', 'INTEL', 'i5-7300 HQ', 'Quad Core - 3.50GHz - 6M Cache', '', 4),
        ('Procesador', 'INTEL', 'i7-12700kf', 'Octa Core - 4.50GHz - 12M Cache', '', 10);
/* 
INSERT INTO productos(nombre, descripcion, tipo_producto, stock)
VALUES  ('', '', 50),
        ('', '', ),
        ('', '', ),
        ('', '', ),
        ('', '', );
 */
SHOW * FROM categorias;
SHOW * FROM procesadores;