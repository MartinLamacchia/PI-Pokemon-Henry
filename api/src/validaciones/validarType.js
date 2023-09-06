const validarType = (type) => {
  if (type.toLowerCase() === "electrico") return "electric";
  if (type.toLowerCase() === "vuelo" || type.toLowerCase() === "volador")
    return "flying";
  if (type.toLowerCase() === "bicho" || type.toLowerCase() === "insecto")
    return "bug";
  if (type.toLowerCase() === "veneno") return "poison";
  if (type.toLowerCase() === "agua") return "water";
  if (type.toLowerCase() === "acero" || type.toLowerCase() === "metal")
    return "steel";
  if (type.toLowerCase() === "fantasma") return "ghost";
  if (type.toLowerCase() === "psiquico") return "psychic";
  if (type.toLowerCase() === "suelo" || type.toLowerCase() === "tierra")
    return "ground";
  if (type.toLowerCase() === "pelea") return "fighting";
  if (type.toLowerCase() === "fuego") return "fire";
  if (type.toLowerCase() === "roca" || type.toLowerCase() === "piedra")
    return "rock";
  if (type.toLowerCase() === "hoja" || type.toLowerCase() === "planta")
    return "grass";
  return type;
};

module.exports = {
  validarType,
};
