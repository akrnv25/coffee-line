const express = require('express');
const { cache } = require('../middlewares/cache');
const { coffeeController } = require('../controllers/coffee.controller');

const router = express.Router();

router.get('/coffee/:id', cache(), coffeeController.getById.bind(coffeeController));

module.exports = { routes: router };
