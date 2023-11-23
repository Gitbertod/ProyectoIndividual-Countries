const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen_de_la_bandera: {
      type: DataTypes.STRING,
    },
    continente:{
      type:DataTypes.STRING(20),
    },
    capital:{
      type:DataTypes.STRING
    },
    subregion:{
      type:DataTypes.STRING
    },
    area:{
      type:DataTypes.INTEGER
    },
    poblacion:{
      type:DataTypes.INTEGER
    }

  });
};