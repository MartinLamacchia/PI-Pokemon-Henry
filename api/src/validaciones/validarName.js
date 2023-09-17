const validarNombre = (name) => {
  if (typeof name === "string") {
    return name.toLowerCase();
  }
  return name;
};

const renombrar = (name) => {
  if (Array.isArray(name)) {
    const newNameArray = name.map((type) => {
      return type.charAt(0).toUpperCase() + type.slice(1);
    });
    return newNameArray;
  }

  return name.charAt(0).toUpperCase() + name.slice(1);
};

const validarNombreDB = (name) => {
  if (typeof name === "string") {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  return name;
};

module.exports = {
  validarNombre,
  renombrar,
  validarNombreDB,
};
