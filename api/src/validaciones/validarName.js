const validarNombre = (name) => {
  return name.toLowerCase();
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
