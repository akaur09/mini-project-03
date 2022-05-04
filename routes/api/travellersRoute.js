const router = require('express').Router();
const { Sequelize } = require('./config/connection');
const sequelize = require('../config/connection');
const { Travellers, Trip, Location } = require('../models');

// GET all travellers
router.get('/', async (req, res) => {
    try {
    
    }
})