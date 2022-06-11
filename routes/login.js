const express = require('express');
const { getToken } = require('../controllers/login');
const { isValidEmail, isValidPassword } = require('../middlewares/loginValidation');

const route = express.Router();

route.post('/', isValidEmail, isValidPassword, getToken);

module.exports = route;
