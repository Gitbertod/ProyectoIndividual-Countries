CREATE TABLE country 
(
    id varchar(3) PRIMARY KEY,
    nombre varchar (40) NOT NULL,
    imagen_de_la_bandera varchar(255),
    continente varchar (30),
    capital varchar (25),
    subregion varchar(30),
    area decimal,
    poblacion varchar (25)
)

CREATE TABLE activity
(
id serial PRIMARY KEY,
nombre varchar (25) NOT NULL,
dificultad varchar (1)
duracion varchar (10)
temporada varchar (15)

);

CREATE TABLE country_activity (
country_id varchar REFERENCES country (id),
activity_id  integer REFERENCES activity (id)
)