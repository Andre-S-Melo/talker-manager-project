const express = require('express');
const { getAll } = require('../controllers/talker');

const route = express.Router();

route.get('/', getAll);
route.post('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

module.exports = route;
