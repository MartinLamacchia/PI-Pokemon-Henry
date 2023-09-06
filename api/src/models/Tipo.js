const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "tipo",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.ENUM(
          "electric",
          "flying",
          "bug",
          "poison",
          "water",
          "steel",
          "ghost",
          "psychic",
          "ground",
          "fighting",
          "fire",
          "rock",
          "grass"
        ),

        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
