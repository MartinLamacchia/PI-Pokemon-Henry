require("dotenv").config();
const axios = require("axios");
const {
  handlerGetAllPokemon,
  handlerGetPokemonByIdOrName,
  handlerPostNewPokemon,
  handlerDeletePokemon,
} = require("../handlers/pokemon");
const { validarNombre } = require("../validaciones/validarName");
const {
  validarDatosPostPokemon,
} = require("../validaciones/validarDatosPokemon");
const url = process.env.URL;
let page = process.env.URL;

const controllersGetAllPokemon = async (req, res) => {
  page = process.env.URL;
  try {
    const { data } = await axios.get(url);
    const pokeApi = await data.results;
    const pokemon = handlerGetAllPokemon(pokeApi);
    const getAllPokemon = await Promise.all(pokemon);
    res.json(getAllPokemon);
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
      res.json(getAllPokemon);
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
      res.json(getAllPokemon);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

const controllersGetPokemonByIdOrName = async (req, res) => {
  try {
    const id = validarNombre(req.params.id);
    const pokemon = await handlerGetPokemonByIdOrName(url, id);
    res.json(pokemon);
  } catch (error) {
    console.log(error);
  }
};

const controllersPostNewPokemon = async (req, res) => {
  const { nombre, imagen, vida, ataque, defensa, peso, altura, tipo } =
    validarDatosPostPokemon(req.body);
  console.log(nombre, imagen, vida, ataque, defensa, peso, altura, tipo);
  try {
    if (typeof result === "string") {
      return res.status(400).json({ error: result });
    }
    const newPokemon = await handlerPostNewPokemon(
      nombre,
      imagen,
      vida,
      ataque,
      defensa,
      peso,
      altura,
      tipo
    );
    res.status(201).json(newPokemon);
  } catch (error) {
    console.log(error);
  }
};

const controllersDeletePokemon = async (req, res) => {
  const nombreEliminado = req.params.id;
  try {
    const pokemonEliminado = await handlerDeletePokemon(nombreEliminado);
    res.status(200).json(pokemonEliminado);
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
