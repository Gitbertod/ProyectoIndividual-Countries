const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Country } = require('./src/db.js')
const PORT = 3001;

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
        poblacion: data[i].population,
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

conn.sync({ force: true }).then(() => {
  const apiData = fetchDataFromAPI()

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
