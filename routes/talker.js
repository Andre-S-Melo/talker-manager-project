const express = require('express');
const { auth } = require('../middlewares/authorization');
const { getAll, getById, create } = require('../controllers/talker');

const route = express.Router();

route.get('/', getAll);
route.post('/', auth, create);
route.get('/:id', getById);
route.put('/:id');
route.delete('/:id');

module.exports = route;
