const express = require('express');
const { getToken } = require('../controllers/login');

const route = express.Router();

route.post('/', getToken);

module.exports = route;
