const axios = require("axios");
const { renombrar } = require("../validaciones/validarName");

const handlerGetAllPokemon = (pokemones) => {
  const pokemon = pokemones.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.url);
    const i = data;
    return {
      id: i.id,
      name: renombrar(i.name),
      types: i.types.map((e) => e.type.name),
      image: i.sprites.other.dream_world.front_default,
      hp: i.stats[0].base_stat,
      attack: i.stats[1].base_stat,
      defense: i.stats[2].base_stat,
      speed: i.stats[5].base_stat,
      height: i.height,
      weight: i.weight,
    };
  });
  return pokemon;
};

const handlerGetPokemonByIdOrName = async (url, id) => {
  try {
    const { data } = await axios.get(`${url}/${id}`);
    const i = data;
    return {
      id: i.id,
      name: renombrar(i.name),
      types: i.types.map((e) => e.type.name),
      image: i.sprites.other.dream_world.front_default,
      hp: i.stats[0].base_stat,
      attack: i.stats[1].base_stat,
      defense: i.stats[2].base_stat,
      speed: i.stats[5].base_stat,
      height: i.height,
      weight: i.weight,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handlerGetAllPokemon,
  handlerGetPokemonByIdOrName,
};
