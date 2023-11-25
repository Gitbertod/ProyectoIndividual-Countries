const { Activity } = require('../db');
const { Op } = require('sequelize');


const getActivityController = async () => {
    try {
        const allActivities = await Activity.findAll()
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(404).send(error.message);

    }
}

const postActivityController  = async(nombre, dificultad, duracion, temporada) => {
    const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada });
    console.log(nombre)
    return newActivity
}


module.exports = {
    getActivityController,
    postActivityController
}