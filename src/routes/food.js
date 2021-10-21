// WORK IN PROGRESS

'use strict';

const express = require('express');
const router = express.Router();
const { food } = require('../models');

let postFood = async (req, res) => {
  console.log(req.body);
  let createFood = await food.create(req.body);
  res.status(200).send(createFood);
};

let getAllFood = async (req, res) => {
  let readAllFood = await food.findAll();
  res.status(200).send(readAllFood);
};

let getFood = async (req, res) => {
  let readFood = await food.findByPk(req.params.id);
  res.status(200).send(readFood);
};

let putFood = async (req, res) => {
  let updateFood = await food.findByPk(req.params.id);
  res.status(200).send(updateFood);
};

let deleteFood = async (req, res) => {
  let destroyFood = await food.findByPk(req.params.id);
  res.status(200).send(destroyFood);
};

router.post('/', postFood);
router.get('/', getAllFood);
router.get('/:id', getFood);
router.put('/:id', putFood);
router.delete('/:id', deleteFood);

module.exports = router;
