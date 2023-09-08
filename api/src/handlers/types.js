const { Type } = require("../db");

const handlerGetTypesApi = async (resultApi) => {
  let allTypes = [];

  resultApi.map((e) => allTypes.push(e.name));
  await Promise.all(
    allTypes.map((type) => Type.findOrCreate({ where: { name: type } }))
  );
  const typesDb = await Type.findAll();
  return typesDb;
};

module.exports = {
  handlerGetTypesApi,
};
