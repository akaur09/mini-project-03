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

        },
        location_id: {

        }
    }
)