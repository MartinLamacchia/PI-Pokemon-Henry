const validarNombre = (name) => {
  if (typeof name === "string") {
    return name.toLowerCase();
  }
  return name;
};

const renombrar = (name) => {
  let newName = name.split("");
  let primeraLetra = newName.shift();
  primeraLetra = primeraLetra.toUpperCase();
  newName.unshift(primeraLetra);
  return newName.join("");
};

module.exports = {
  validarNombre,
  renombrar,
};
