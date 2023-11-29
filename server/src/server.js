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

