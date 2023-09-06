const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        isUrl: true,
      },
      vida: {
        type: DataTypes.INTEGER,
        min: 1,
        max: 500,
      },
      ataque: {
        type: DataTypes.INTEGER,
        min: 10,
        max: 1000,
      },
      defensa: {
        type: DataTypes.INTEGER,
        min: 10,
        max: 1000,
      },
      peso: {
        type: DataTypes.INTEGER,
        min: 10,
        max: 4000,
      },
      altura: {
        type: DataTypes.INTEGER,
        min: 10,
        max: 4000,
      },
    },
    { timestamps: false }
  );
};
