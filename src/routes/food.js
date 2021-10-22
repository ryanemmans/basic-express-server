// WORK IN PROGRESS
// do same for clothes

'use strict';

const express = require('express');
const { food } = require('../models');
const router = express.Router();

router.post('/', postFood);
router.get('/', getAllFood);
router.get('/:id', getFood);
router.put('/:id', putFood);
router.delete('/:id', deleteFood);

async function postFood(req, res, next) {
  try {
    const createFood = await food.create({
      category: req.body.category,
      name: req.body.name,
    });
    res.status(200).send(createFood);
  } catch (e) {
    next(e);
  }
}

async function getFood (req, res, next) {
  try {
    const readFood = await food.findOne(parseInt(req.params.id));
    res.status(200).send(readFood);
  } catch (e) {
    next(e);
  }
}

async function getAllFood(req, res, next) {
  try {
    const readAllFood = await food.findAll();
    res.status(200).send(readAllFood);
  } catch (e) {
    next(e);
  }
}

async function putFood (req, res, next) {
  try {
    const updateFood = await food.update({
      name: req.body.name,
      size: req.body.size,
    }, { where: { id: req.params.id } });
    res.status(200).send(updateFood);
  } catch (e) {
    next(e);
  }
}

async function deleteFood (req, res, next) {
  try {
    const destroyFood = await food.destroy({ where: { id: req.params.id }});
    res.status(200).send(destroyFood);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
