const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hp: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 500,
        },
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 1000,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 1000,
        },
      },
      speed: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 100,
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 4000,
        },
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 150,
        },
      },
    },
    { timestamps: false }
  );
};
