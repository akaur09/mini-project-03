// create models for travellers, location, and trip
const {Model, Datatypes} = require('sequelize');
const sequelize = require('../config/connection');

class Travellers extends Model{}

Travellers.init(
 {
     id: {
         primaryKey: true
     },
    name:{
        type: Datatypes.STRING
    },
    email:{
        type: Datatypes.STRING
    }
 }   
)
Location.init (
    {
        id:{
            primaryKey: true
        },
        name:{
            type: Datatypes.STRING
        }
    }
)
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