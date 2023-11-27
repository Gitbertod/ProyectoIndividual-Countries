const {Router} = require('express');
const  routerCountries = Router();
const {allCountriesHandler, getCountryByIdHandler} =require('../handlers/countriesHandler')

routerCountries.get("/",allCountriesHandler)
routerCountries.get("/:id",getCountryByIdHandler)



module.exports = routerCountries;