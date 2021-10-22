'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const FoodModel = require('./food.js');
// const ClothesModel = require('./clothes.js');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATA_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

let sequelizeInstance = new Sequelize(DATABASE_URL, options);

const foodTable = FoodModel(sequelizeInstance, DataTypes);
// const clothesTable = ClothesModel(sequelizeInstance, DataTypes);

module.exports = {
  db: sequelizeInstance,
  food: foodTable,
  // clothes: clothesTable,
};
