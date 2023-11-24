const { Router } = require("express");
const activitiesRouter = require('./activitiesRouter')
//const countriesRouter = require('./countriesRouter')

const router = Router();

//router.use('/country',countriesRouter)
router.use('/activity',activitiesRouter)

module.exports = router;
