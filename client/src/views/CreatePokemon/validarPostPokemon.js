const validarPostPokemon = (form) => {
  const errors = {};

  if (form.name.length > 11)
    errors.name = "El nombre no puede tener mas de 10 caracteres";
  else if (!/^[^\d]*$/.test(form.name))
    errors.name = "El nombre no puede contener numeros";

  if (
    !/^(https?:\/\/)?([a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/[^\s]*)?$/.test(
      form.image
    )
  )
    errors.image = "La imagen debe ser una URL valida";

  if (!/^[0-9]+$/.test(form.hp))
    errors.hp = "La vida debe contener solo numeros";
  else if (form.hp < 1 || form.hp > 500)
    errors.hp = "La vida debe esta entre 1 y 500";

  if (!/^[0-9]+$/.test(form.speed))
    errors.speed = "La velocidad debe contener solo numeros";
  else if (form.speed < 10 || form.speed > 100)
    errors.speed = "La velocidad debe esta entre 10 y 100";

  if (!/^[0-9]+$/.test(form.height))
    errors.height = "La altura debe contener solo numeros";
  else if (form.height < 10 || form.height > 150)
    errors.height = "La altura debe esta entre 10 y 150";

  if (!/^[0-9]+$/.test(form.weight))
    errors.weight = "El peso debe contener solo numeros";
  else if (form.weight < 10 || form.weight > 4000)
    errors.weight = "El peso debe esta entre 10 y 4000";

  if (!/^[0-9]+$/.test(form.attack))
    errors.attack = "El ataque debe contener solo numeros";
  else if (form.attack < 10 || form.attack > 1000)
    errors.attack = "El ataque debe esta entre 10 y 1000";

  if (!/^[0-9]+$/.test(form.defense))
    errors.defense = "La defensa debe contener solo numeros";
  else if (form.defense < 10 || form.defense > 1000)
    errors.defense = "La defensa debe esta entre 10 y 1000";

  return errors;
};

export default validarPostPokemon;
