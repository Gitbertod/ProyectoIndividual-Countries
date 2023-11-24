const { Router } = require("express");
const postActivitiesHandler = require("../handlers/postActivitiesHandler");
const routerActivities = Router();

routerActivities.post('/',postActivitiesHandler)

module.exports = routerActivities;