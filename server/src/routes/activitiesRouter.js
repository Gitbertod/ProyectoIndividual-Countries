const { Router } = require("express");
const {postActivitiesHandler,getActivitiesHandler} = require("../handlers/activitiesHandler");
const routerActivities = Router();

routerActivities.post('/',postActivitiesHandler)
routerActivities.get('/',getActivitiesHandler)

module.exports = routerActivities;