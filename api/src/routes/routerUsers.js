const routerUsers = require("express").Router();
const {
  controllersGetUser,
  controllersPostUser,
  controllersDeleteUser,
} = require("../controllers/users");

routerUsers.get("/", controllersGetUser);

routerUsers.post("/", controllersPostUser);

routerUsers.delete("/:id", controllersDeleteUser);

module.exports = routerUsers;
