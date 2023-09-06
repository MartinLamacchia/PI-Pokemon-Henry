const { Router } = require("express");
// const routerUsers = require("./routerUsers");
const routerPokemon = require("./routerPokemon");
// const routerTypes = require("./routerTypes");

const router = Router();

// router.use("/users", routerUsers);
router.use("/pokemon", routerPokemon);
// router.use("types", routerTypes);

module.exports = router;
