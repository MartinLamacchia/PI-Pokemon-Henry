const routerPokemon = require("express").Router();
const {
  controllersGetAllPokemon,
  controllersGetNextPokemon,
  controllersGetPreviousPokemon,
  controllersGetPokemonByIdOrName,
  controllersPostNewPokemon,
  controllersDeletePokemon,
} = require("../controllers/pokemon");

routerPokemon.get("/", controllersGetAllPokemon);

routerPokemon.get("/next", controllersGetNextPokemon);

routerPokemon.get("/previous", controllersGetPreviousPokemon);

routerPokemon.get("/:id", controllersGetPokemonByIdOrName);

routerPokemon.post("/", controllersPostNewPokemon);

routerPokemon.delete("/:id", controllersDeletePokemon);

module.exports = routerPokemon;
