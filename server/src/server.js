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

//***** Agregar actividad *****
server.post('/activities', async (req, res) => {
    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada });

        res.status(200).json(newActivity)
    } catch (error) {
        res.status(404).send(error.message);
    }
})

//*** Obtener actividad
server.get('/activities', async (req, res) => {
    try {
        const allActivities = await Activity.findAll()
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(404).send(error.message);

    }
})


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
