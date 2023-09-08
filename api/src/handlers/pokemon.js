const axios = require("axios");
const { renombrar } = require("../validaciones/validarName");
const { Pokemon, Type } = require("../db.js");

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

const handlerGetAllPokemonDB = async () => {
  const PokemonDB = await Pokemon.findAll({
    // incluyendo atributos nombre de la tabla Tipos
    include: {
      model: Type,
      attributes: ["name"],
    },
  });

  const getAllPokemonDB = PokemonDB.map((e) => {
    return {
      id: e.id,
      name: e.name,
      image: e.image,
      types: e.Types.map((e) => e.name),
      hp: e.hp,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
    };
  });
  return getAllPokemonDB;
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

const handlerPostNewPokemon = async (
  name,
  image,
  hp,
  attack,
  defense,
  weight,
  speed,
  height,
  types
) => {
  try {
    const [newPokemon, create] = await Pokemon.findOrCreate({
      where: { name },
      defaults: {
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        weight,
        height,
      },
    });
    if (!create) {
      throw new Error("El pokemon ya esta creado en la base de datos");
    }

    const newType = await Type.findAll({ where: { name: types } });

    await newPokemon.addTypes(newType);

    return newPokemon;
  } catch (error) {
    console.log(error);
  }
};

const handlerDeletePokemon = async (pokemonEliminado) => {
  try {
    await Pokemon.destroy({
      where: {
        name: pokemonEliminado,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handlerGetAllPokemon,
  handlerGetPokemonByIdOrName,
  handlerPostNewPokemon,
  handlerDeletePokemon,
  handlerGetAllPokemonDB,
};
