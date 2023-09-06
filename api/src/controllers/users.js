const {
  handlerPostUsuario,
  handlerGetUser,
  handlerDeleteUser,
} = require("../handlers/users");

const controllersPostUser = async (req, res) => {
  const { nombre, nombreUsuario, email, contraseña } = req.body;
  try {
    if (!nombre || !nombreUsuario || !email || !contraseña) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const newUser = await handlerPostUsuario(
      nombre,
      nombreUsuario,
      email,
      contraseña
    );
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const controllersGetUser = async (req, res) => {
  const { email, contraseña } = req.query;
  try {
    if (!email || !contraseña) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const usuarioCorrecto = await handlerGetUser(email, contraseña);
    if (usuarioCorrecto === "Usuario no encontrado") {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ access: true });
  } catch (error) {
    console.log(error);
  }
};

const controllersDeleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await handlerDeleteUser(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  controllersPostUser,
  controllersGetUser,
  controllersDeleteUser,
};
