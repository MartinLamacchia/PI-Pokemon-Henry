const axios = require("axios");
const { handlerGetPokemonByTypes } = require("../handlers/types");
const { validarType } = require("../validaciones/validarType");
const url_type = process.env.URL_TYPE;

const controllersGetPokemonByTypes = async (req, res) => {
  try {
    const type = validarType(req.params.type);
    const { data } = await axios.get(`${url_type}/${type}`);
    const pokeApi = await data.pokemon;
    const pokemon = handlerGetPokemonByTypes(pokeApi, type);
    const getAllPokemon = await Promise.all(pokemon);
    res.json(getAllPokemon);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  controllersGetPokemonByTypes,
};
