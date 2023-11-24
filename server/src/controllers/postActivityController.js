const {Activity} = require('../db.js')

const postActivityController  = async(nombre, dificultad, duracion, temporada) => {
    const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada });
    console.log(nombre)
    return newActivity
}

module.exports = {postActivityController};