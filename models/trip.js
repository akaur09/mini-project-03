const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model{}

Trip.init (
    {
        id: {
            primaryKey: true
        },
        trip_budget: {
            type: Datatypes.INTEGER
        },
        traveller_amount: {
            type: Datatypes.INTEGER
        },
        traveller_id: {
            type: Datatypes.INTEGER,
            reference: {
                model: 'traveller',
                key: 'id',
            },
        },
        location_id: {
            type: Datatypes.INTEGER,
            reference: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscore: true,
        modelName: 'trip'
    }
);
 module.exports = Trip;
