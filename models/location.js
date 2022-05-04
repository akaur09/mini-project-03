const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model{}

Location.init (
    {
        id:{
            primaryKey: true
        },
        name:{
            type: Datatypes.STRING
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscore: true,
        modelName: 'Location'
    }
);

module.exports = Location;