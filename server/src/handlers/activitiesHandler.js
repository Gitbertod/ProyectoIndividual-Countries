const { getActivityController,postActivityController } = require('../controllers/activityControllers')

const getActivitiesHandler = async (res, req) => {
    try {
        const activities = await getActivityController()
        return res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

const postActivitiesHandler = async (req, res) => {

    try {
        const { nombre, dificultad, duracion, temporada } = req.body;
        const response = await postActivityController(nombre, dificultad, duracion, temporada)
       return  res.status(200).json(response)
    } catch (error) {
        res.status(404).send(error.message)
    }

}

module.exports = {
    getActivitiesHandler,
    postActivitiesHandler
}