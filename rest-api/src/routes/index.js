const express = require('express');
const { coffeeController } = require('../controllers/coffee.controller');

const router = express.Router();

router.get('/coffee/:id', coffeeController.getById.bind(coffeeController));

module.exports = { routes: router };
