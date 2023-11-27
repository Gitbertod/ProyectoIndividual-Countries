const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { Activity, Country } = require('./db');
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
server.use(router);

const { Op } = require('sequelize');



/**📍 GET | /countries
Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información.*/


/*📍 GET | /countries/:idPais
Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
El país es recibido por parámetro (ID de tres letras del país).
Tiene que incluir los datos de las actividades turísticas asociadas a este país.*/


/*📍 GET | /countries/name?="..."
Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el país, debe mostrar un mensaje adecuado.
*/

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

