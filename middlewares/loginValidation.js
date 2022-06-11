const err = require('../utils/error');

const isValidEmail = (req, _res, next) => {
  const { email } = req.body;

  if (!email) throw err(400, 'O campo "email" é obrigatório');

  if (!email.includes('@') || !email.includes('.com')) {
    throw err(400, 'O "email" deve ter o formato "email@email.com"');
}

  next();
};

const isValidPassword = (req, _res, next) => {
  const { password } = req.body;

  if (!password) throw err(400, 'O campo "password" é obrigatório');

  if (password.length < 6) throw err(400, 'O "password" deve ter pelo menos 6 caracteres');

  next();
};

module.exports = {
  isValidEmail,
  isValidPassword,
};
