const { User } = require("../db");

const handlerGetUser = async (email, password) => {
  try {
    const userFind = await User.findOne({
      where: {
        email,
        password,
      },
    });
    if (!userFind) {
      return "Usuario no encontrado";
    }
    return userFind;
  } catch (error) {
    console.log(error);
  }
};

const handlerPostUsuario = async (name, nameUser, email, password) => {
  try {
    const [newUser, create] = await User.findOrCreate({
      where: { name },
      defaults: {
        name,
        nameUser,
        email,
        password,
      },
    });
    if (!create) {
      return { message: "El usuario ya esta registrado" };
    }
    return newUser;
  } catch (error) {
    console.log(error);
  }
};

const handlerDeleteUser = async (id) => {
  try {
    await User.destroy({
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
