const express = require('express');

const route = express.Router();

route.get('/');
route.post('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');

module.exports = route;
