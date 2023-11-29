const { Activity,Country } = require('../db');
const { Op } = require('sequelize');


const getActivityController = async () => {
    try {
        const allActivities = await Activity.findAll(
            {include:[{model:Country,
                as:'Countries',
            attributes:["nombre","imagen_de_la_bandera"],
            through:{attributes:[]}}]}
        )
        return allActivities
    } catch (error) {
        throw new Error('no se consiguio la actividad');

    }
}

const postActivityController  = async(nombre, dificultad, duracion, temporada,countryId) => {
    const newActivity = await Activity.create({ nombre, dificultad, duracion, temporada });
  
    await newActivity.setCountries(countryId)
    
    return newActivity
}


module.exports = {
    getActivityController,
    postActivityController
}

//CUANDO SE CREA LA ACTIVIDAD SE DEBE INCLUIR CON QUE PAIS SE RELACIONA