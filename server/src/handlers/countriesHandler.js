const {
    getAllCountriesController,
    getNameCountriesController,
    getCountryByIdController
} = require('../controllers/countryControllers')


const allCountriesHandler = async (req, res) => {
    const { nombre } = req.query;

    try {
        const countries = nombre ? await getNameCountriesController(nombre) : await getAllCountriesController()
        return res.status(200).json({ countries })
    } catch (error) {
        return res.status(500).json({ error: error.message })
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