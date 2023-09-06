const { Usuario } = require("../db");

const handlerGetUser = async (email, contraseña) => {
  try {
    const usuarioCorrecto = await Usuario.findOne({
      where: {
        email,
        contraseña,
      },
    });
    if (!usuarioCorrecto) {
      return "Usuario no encontrado";
    }
    return usuarioCorrecto;
  } catch (error) {
    console.log(error);
  }
};

const handlerPostUsuario = async (nombre, nombreUsuario, email, contraseña) => {
  try {
    const newUser = await Usuario.create({
      nombre,
      nombreUsuario,
      email,
      contraseña,
    });
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const handlerDeleteUser = async (id) => {
  try {
    await Usuario.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  handlerPostUsuario,
  handlerGetUser,
  handlerDeleteUser,
};
