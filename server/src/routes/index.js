const { Router } = require("express");
const activitiesRouter = require('./activitiesRouter')
const countriesRouter = require('./countriesRouter')

const router = Router();

router.use('/country',countriesRouter)
router.use('/activities',activitiesRouter)

module.exports = router;
