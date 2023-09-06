const routerTypes = require("express").Router();
const { controllersGetPokemonByTypes } = require("../controllers/types");

routerTypes.get("/:type", controllersGetPokemonByTypes);

module.exports = routerTypes;
