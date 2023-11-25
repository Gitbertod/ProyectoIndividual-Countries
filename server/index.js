const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const { Country } = require('./src/db.js')
const { fetchDataFromAPI } = require("./src/dataFromApi/dataFromApi.js") 
const PORT = 3001;

conn.sync({ force: true }).then(() => {
  fetchDataFromAPI()

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  })
}).catch(error => console.error(error))
