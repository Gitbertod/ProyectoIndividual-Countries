const { Activity,Country } = require('../db');
const { Op } = require('sequelize');


const getActivityController = async () => {
    try {
        const allActivities = await Activity.findAll(
            {include: Country}
        )
        return allActivities
    } catch (error) {
        throw new Error('no se consiguio la actividad');

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