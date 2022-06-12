const err = require('../utils/error');

const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) throw err(401, 'Token não encontrado');

  if (token.length < 16) throw err(401, 'Token inválido');

  next();
};

module.exports = { 
  auth,
};
