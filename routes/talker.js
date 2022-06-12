const express = require('express');
const { auth } = require('../middlewares/authorization');
const { talker } = require('../middlewares/talkerValidation');
const { getAll, getById, create, update, remove } = require('../controllers/talker');

const route = express.Router();

route.get('/', getAll);
route.post('/', auth, talker, create);
route.get('/:id', getById);
route.put('/:id', auth, talker, update);
route.delete('/:id', auth, remove);

module.exports = route;
