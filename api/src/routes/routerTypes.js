const routerTypes = require("express").Router();
const { controllersGetByTypesBD } = require("../controllers/types");

routerTypes.get("/", controllersGetByTypesBD);

module.exports = routerTypes;
