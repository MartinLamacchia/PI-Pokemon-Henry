const validarDatosPostPokemon = (pokemon) => {
  const { name, image, hp, attack, defense, speed, weight, height } = pokemon;

  if (
    !name ||
    !image ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !weight ||
    !height
  )
    return "Falta completar datos";

  if (typeof name !== "string" || name.length > 15)
    return "El nombre del Pokemon no es correcto";

  if (typeof image !== "string") return "La imagen del Pokemon no es correcta";

  if (typeof hp !== "number" || hp <= 1 || hp >= 500)
    return "La vida del Pokemon no es correcta";

  if (typeof attack !== "number" || attack <= 10 || attack >= 1000)
    return "El ataque del Pokemon no es correcto";

  if (typeof defense !== "number" || defense <= 10 || defense >= 1000)
    return "La defensa del Pokemon no es correcta";

  if (typeof speed !== "number" || speed <= 10 || speed >= 100)
    return "La defensa del Pokemon no es correcta";

  if (typeof weight !== "number" || weight <= 10 || weight >= 4000)
    return "El peso del Pokemon no es correcto";

  if (typeof height !== "number" || height <= 10 || height >= 4000)
    return "La altura del pokemon no es correcta";

  return pokemon;
};

module.exports = { validarDatosPostPokemon };
