const { Type } = require("../db");
const { renombrar } = require("../validaciones/validarName");

const handlerGetTypesApi = async (resultApi) => {
  let allTypes = [];

  await resultApi.map((e) => allTypes.push(renombrar(e.name)));
  await Promise.all(
    allTypes.map((type) => Type.findOrCreate({ where: { name: type } }))
  );

  const typesDb = await Type.findAll();
  return typesDb;
};

module.exports = {
  handlerGetTypesApi,
};
