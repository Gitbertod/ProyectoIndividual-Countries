const axios = require('axios')
const { Country } = require('../db')

const countries = []

const fetchDataFromAPI = async () => {
    try {
        const { data } = await axios.get('http://localhost:5000/countries')

        for (let i = 0; i < data.length; i++) {
            countryData = {
                id: data[i].cca3,
                nombre: data[i].name.common,
                imagen_de_la_bandera: data[i].flags.png,
                continente: data[i].continents,
                capital: data[i].capital,
                subregion: data[i].subregion,
                area: data[i].area,
                poblacion: data[i].population
            }
            countries.push(countryData)
        }
        await Country.bulkCreate(countries)
        return countries

    } catch (error) {
        console.log('Error al obtener datos de la API', error);
        throw error;
    }
}

module.exports = { fetchDataFromAPI }