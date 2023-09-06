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
        unique: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vida: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 500,
        },
      },
      ataque: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 1000,
        },
      },
      defensa: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 1000,
        },
      },
      peso: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 4000,
        },
      },
      altura: {
        type: DataTypes.INTEGER,
        validate: {
          min: 10,
          max: 4000,
        },
      },
    },
    { timestamps: false }
  );
};
