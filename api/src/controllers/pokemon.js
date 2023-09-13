require("dotenv").config();
const axios = require("axios");
const {
  handlerGetAllPokemon,
  handlerGetPokemonByIdOrName,
  handlerPostNewPokemon,
  handlerDeletePokemon,
  handlerGetAllPokemonDB,
  handlerGetPokemonByIdOrNameDB,
} = require("../handlers/pokemon");
const { validarNombre } = require("../validaciones/validarName");
const {
  validarDatosPostPokemon,
} = require("../validaciones/validarDatosPokemon");
const url = process.env.URL;
const urlId = process.env.URL_ID;
let page = process.env.URL;

const controllersGetAllPokemon = async (req, res) => {
  page = process.env.URL;
  try {
    const { data } = await axios.get(url);
    const pokeApi = await data.results;
    const pokemon = handlerGetAllPokemon(pokeApi);
    const getAllPokemon = await Promise.all(pokemon);

    const getAllPokemonDB = await handlerGetAllPokemonDB();

    const allPokemons = [...getAllPokemon, ...getAllPokemonDB];

    return res.json(allPokemons);
  } catch (error) {
    console.log(error);
  }
};

const controllersGetNextPokemon = async (req, res) => {
  try {
    const { data } = await axios.get(page);
    if (data.next !== null) {
      page = data.next;
    } else {
      page = process.env.URL;
    }
    try {
      const { data } = await axios.get(page);
      const pokeApi = await data.results;
      const pokemon = handlerGetAllPokemon(pokeApi);
      const getAllPokemon = await Promise.all(pokemon);

      // if (data.next === null) {
      //   const getAllPokemonDB = await handlerGetAllPokemonDB();
      //   const allPokemons = [...getAllPokemon, ...getAllPokemonDB];
      //   return res.json(allPokemons);
      // }

      return res.json(getAllPokemon);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

const controllersGetPreviousPokemon = async (req, res) => {
  try {
    const { data } = await axios.get(page);
    if (data.previous !== null) {
      page = data.previous;
    } else {
      page = process.env.URL;
    }
    try {
      const { data } = await axios.get(page);
      const pokeApi = await data.results;
      const pokemon = handlerGetAllPokemon(pokeApi);
      const getAllPokemon = await Promise.all(pokemon);
      return res.json(getAllPokemon);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

const controllersGetPokemonByIdOrName = async (req, res) => {
  try {
    const name = req.params.id;
    const id = validarNombre(req.params.id);
    const pokemon = await handlerGetPokemonByIdOrName(urlId, id);

    if (!pokemon) {
      const pokemonDB = await handlerGetPokemonByIdOrNameDB(name);

      if (!pokemonDB) {
        res.status(404).json({
          message: "No se a encontrado un Pokemon con ese Nombre o ID",
        });
      }

      return res.json(pokemonDB);
    }

    return res.json(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const controllersPostNewPokemon = async (req, res) => {
  const { name, image, hp, attack, defense, speed, weight, height, types } =
    validarDatosPostPokemon(req.body);
  try {
    if (typeof result === "string") {
      return res.status(400).json({ error: result });
    }
    const newPokemon = await handlerPostNewPokemon(
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      weight,
      height,
      types
    );
    return res.status(201).json(newPokemon);
  } catch (error) {
    console.log(error);
  }
};

const controllersDeletePokemon = async (req, res) => {
  const nameDelete = req.params.id;
  try {
    const pokeDelete = await handlerDeletePokemon(nameDelete);
    return res.status(200).json(pokeDelete);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  controllersGetAllPokemon,
  controllersGetNextPokemon,
  controllersGetPreviousPokemon,
  controllersGetPokemonByIdOrName,
  controllersPostNewPokemon,
  controllersDeletePokemon,
};
