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

module.exports = {
  validarNombre,
  renombrar,
};
