const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { Activity, Country } = require('./db');
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

const { Op } = require('sequelize');

server.use(router);


/**📍 GET | /countries
Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.*/
server.get('/countries', async (req, res) => {
    try {
       const {nombre} = req.query;
       if(nombre){
        
       }
        const allCountries = await Country.findAll()
        res.status(200).json(allCountries);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

/*📍 GET | /countries/:idPais
Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
El país es recibido por parámetro (ID de tres letras del país).
Tiene que incluir los datos de las actividades turísticas asociadas a este país.*/
server.get('/countries/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const foundCountry = await Country.findByPk(id);

        res.status(200).json(foundCountry);
    } catch (error) {
        res.status(404).send(error.message);
    }
})


/*📍 GET | /countries/name?="..."
Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el país, debe mostrar un mensaje adecuado.
*/
server.get('countries/name', async (nombre) => {
    try {
        
        const findName = await Country.findOne({
            where: {
                nombre: nombre
            }
        })
        
        if(findName === null){
            throw new Error("No se consiguio")
        }
        
    } catch (error) {
        throw Error('Error al obtener países por nombre:', error);
    }
})

//{ [Op.iLike]: `%${nombre}%` }

/*📍 POST | /activities
Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
Toda la información debe ser recibida por body.
Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).*/



/* 📍 GET | /activities
Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.*/
server.get('/activities', async (req, res) => {
    try {
        const allActivities = await Activity.findAll()
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(404).send(error.message);
        
    }
})


//*** Borrar actividad*/
server.delete('/activities/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activityDeleted = await Activity.findByPk(id);
        activityDeleted.destroy();
        res.status(200).json(activityDeleted);
    } catch (error) {
        res.status(404).send(error.message);
    }
})
module.exports = server;

