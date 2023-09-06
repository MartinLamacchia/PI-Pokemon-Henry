const axios = require("axios");
const { renombrar } = require("../validaciones/validarName");

const handlerGetPokemonByTypes = (pokemones, types) => {
  const pokemon = pokemones.map(async (pokemon) => {
    const { data } = await axios.get(pokemon.pokemon.url);
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

module.exports = {
  handlerGetPokemonByTypes,
};
