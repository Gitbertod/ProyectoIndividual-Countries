const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const { Activity } = require('./db');
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);


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

/*📍 POST | /activities
Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
Toda la información debe ser recibida por body.
Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).*/
 server.post('/activities', async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada });

        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).send(error.message);
    }
})


/* 📍 GET | /activities
Obtiene un arreglo de objetos, donde cada objeto es una actividad turística.*/
server.get('/activities', async (req, res) => {
    try {
        const allActivities  = await Activity.findAll()
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(404).send(error.message);

    }
})







/*📍/POST | /activities
Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
Toda la información debe ser recibida por body.
Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).


*

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
