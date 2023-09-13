const {
  handlerPostUsuario,
  handlerGetUser,
  handlerDeleteUser,
} = require("../handlers/users");

const controllersPostUser = async (req, res) => {
  const { name, nameUser, email, password } = req.body;
  try {
    if (!name || !nameUser || !email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const newUser = await handlerPostUsuario(name, nameUser, email, password);
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const controllersGetUser = async (req, res) => {
  const { email, password } = req.query;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const userFind = await handlerGetUser(email, password);
    if (userFind === "Usuario no encontrado") {
      return res.status(400).json({ message: "Usuario no encontrado" });
    }
    return res.status(200).json({ access: true });
  } catch (error) {
    console.log(error);
  }
};

const controllersDeleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const deleteUser = await handlerDeleteUser(id);
    return res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  controllersPostUser,
  controllersGetUser,
  controllersDeleteUser,
};
