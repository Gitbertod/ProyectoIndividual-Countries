const {
    getAllCountriesController,
    getNameCountriesController,
    getCountryByIdController
} = require('../controllers/countryControllers')


const allCountriesHandler = async (req, res) => {
    const { nombre } = req.query;

    if(nombre){
        try {
            res.status(200).json(await getNameCountriesController(nombre))
        } catch (error) {
            res.status(500).json({error:error.message })
        }
    }else{
        try {
            res.status(200).json(await getAllCountriesController())
        } catch (error) {
            res.status(500).json({error:error.message })
        }
    }
}

const getCountryByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryByIdController(id)
        if (country) {
            return res.status(200).json(country)
        } else {
            return res.status(404).json({ country: "No se consigio el país" })
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    allCountriesHandler,
    getCountryByIdHandler
}