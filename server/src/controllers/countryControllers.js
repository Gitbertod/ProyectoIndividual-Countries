const { Country, Activity } = require('../db')
const { Op } = require('sequelize');

const getAllCountriesController = async () => {
    const allCountries = await Country.findAll()
    return allCountries;

}

const getNameCountriesController = async (nombre) => {

    // const findName = await Country.findAll({
    //     where: {
    //         nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
    //     },
    //     include: Activity
    // });

    const findCoincidence = await Country.findAll({
        where: {
            nombre: { [Op.iLike]: `%${nombre}%` }
        },
    })

    if (findCoincidence === null) {
        throw new Error('No se consiguio el nombre');
    }

    return findCoincidence
}

const getCountryByIdController = async (id) => {
    const findId = await Country.findOne({ where: { id }, include:[{model:Activity,
        as:'Activities',
    attributes:["nombre"],
    through:{attributes:[]}}]});

    if (findId) {
        return findId
    } else {
        throw new Error('No se encontró el país con el ID proporcionado');
    }
}

module.exports = {
    getAllCountriesController,
    getNameCountriesController,
    getCountryByIdController
}