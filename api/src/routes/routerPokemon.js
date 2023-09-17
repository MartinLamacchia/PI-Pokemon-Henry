const routerPokemon = require("express").Router();
const {
  controllersGetAllPokemon,
  controllersGetNextPokemon,
  controllersGetPreviousPokemon,
  controllersGetPokemonById,
  controllersPostNewPokemon,
  controllersDeletePokemon,
  controllersGetPokemonByName,
  controllersGetPokemonDetail,
  controllersGetPokemonsAll,
} = require("../controllers/pokemon");

routerPokemon.get("/", controllersGetAllPokemon);

routerPokemon.get("/all", controllersGetPokemonsAll);

routerPokemon.get("/detail/:id", controllersGetPokemonDetail);

routerPokemon.get("/name", controllersGetPokemonByName);

routerPokemon.get("/next", controllersGetNextPokemon);

routerPokemon.get("/previous", controllersGetPreviousPokemon);

routerPokemon.get("/:id", controllersGetPokemonById);

routerPokemon.post("/", controllersPostNewPokemon);

routerPokemon.delete("/:id", controllersDeletePokemon);

module.exports = routerPokemon;
