const express = require('express');
const login = require('../controllers/login');
const { validLogin } = require('../middlewares/loginValidation');

const route = express.Router();

route.post('/', validLogin, login.getToken);

module.exports = route;
