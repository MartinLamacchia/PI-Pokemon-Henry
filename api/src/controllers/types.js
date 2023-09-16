const axios = require("axios");
const { handlerGetTypesApi } = require("../handlers/types");
const url_type = process.env.URL_TYPE;

const controllersGetByTypesBD = async (req, res) => {
  try {
    const { data } = await axios.get(`${url_type}`);
    const resultApi = await data.results;
    const typesPokemon = await handlerGetTypesApi(resultApi);
    return res.status(200).json(typesPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  controllersGetByTypesBD,
};
