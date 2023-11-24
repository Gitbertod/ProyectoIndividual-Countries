const { postActivityController } = require('../controllers/postActivityController')

const postActivitiesHandler = async (req, res) => {

    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const response = await postActivityController(nombre, dificultad, duracion, temporada)
       return  res.status(200).json(response)
    } catch (error) {
        res.status(404).send(error.message)
    }

}

module.exports = postActivitiesHandler;