const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('country_activity', {
        country_id: {
            type: DataTypes.STRING,
            reference: {
                model: 'Country',
                key: 'id'
            }
        },
        activity_id:{
            type:DataTypes.INTEGER,
            reference:{
                model:'Activity',
                key: 'id' 
            }

        }
    })
}