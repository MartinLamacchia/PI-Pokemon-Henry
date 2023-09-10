const validarLogin = (form) => {
  const errors = {};

  if (form.email === "") {
    errors.email = "El mail esta vacio";
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
    errors.email = "El mail es invalido";
  } else {
    if (form.password === "") {
      errors.password = "La contraseña esta vacia";
    } else if (!/\d/.test(form.password)) {
      errors.password = "La contraseña debe tener al menos un numero";
    } else if (!/^.{6,18}$/.test(form.password)) {
      errors.password = "La contraseña debe tener entre 6 y 18 caracteres";
    } else if (!/.*[A-Z].*/.test(form.password)) {
      errors.password = "La contraseña debe tener al menos una mayuscula";
    }
  }

  return errors;
};

export default validarLogin;
