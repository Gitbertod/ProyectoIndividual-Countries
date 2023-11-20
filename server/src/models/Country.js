const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
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
      type:DataTypes.STRING,
    },
    capital:{
      type:DataTypes.STRING
    },
    subregion:{
      type:DataTypes.STRING
    },
    area:{
      type:DataTypes.FLOAT
    },
    poblacion:{
      type:DataTypes.INTEGER
    }

  });
};