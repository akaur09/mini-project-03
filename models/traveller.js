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
 },   
 {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscore: true,
     modelName: 'Traveller'

 }
);

module.exports = Travellers;