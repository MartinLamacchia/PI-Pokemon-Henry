const validarDatosPostPokemon = (pokemon) => {
  const { nombre, imagen, vida, ataque, defensa, peso, altura } = pokemon;

  if (!nombre || !imagen || !vida || !ataque || !defensa || !peso || !altura)
    return "Falta completar datos";

  if (typeof nombre !== "string" || nombre.length > 15)
    return "El nombre del Pokemon no es correcto";

  if (typeof imagen !== "string") return "La imagen del Pokemon no es correcta";

  if (typeof vida !== "number" || vida <= 1 || vida >= 500)
    return "La vida del Pokemon no es correcta";

  if (typeof ataque !== "number" || ataque <= 10 || ataque >= 1000)
    return "El ataque del Pokemon no es correcto";

  if (typeof defensa !== "number" || defensa <= 10 || defensa >= 1000)
    return "La defensa del Pokemon no es correcta";

  if (typeof peso !== "number" || peso <= 10 || peso >= 4000)
    return "El peso del Pokemon no es correcto";

  if (typeof altura !== "number" || peso <= 10 || peso >= 4000)
    return "La altura del pokemon no es correcta";

  return pokemon;
};

module.exports = { validarDatosPostPokemon };
