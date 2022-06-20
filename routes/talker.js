const express = require('express');
const talker = require('../controllers/talker');
const { auth } = require('../middlewares/authorization');
const { validTalker } = require('../middlewares/talkerValidation');

const route = express.Router();

route.get('/', talker.getAll);
route.post('/', auth, validTalker, talker.create);
route.get('/search', auth, talker.search);
route.get('/:id', talker.getById);
route.put('/:id', auth, validTalker, talker.update);
route.delete('/:id', auth, talker.remove);

module.exports = route;
