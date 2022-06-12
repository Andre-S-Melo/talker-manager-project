const err = require('../utils/error');

const isValidName = (req, _res, next) => {
  const { name } = req.body;

  if (!name) throw err(400, 'O campo "name" é obrigatório');

  if (name.length < 3) throw err(400, 'O "name" deve ter pelo menos 3 caracteres');

  next();
};

const isValidAge = (req, _res, next) => {
  const { age } = req.body;

  if (!age) throw err(400, 'O campo "age" é obrigatório');

  if (age < 18) throw err(400, 'A pessoa palestrante deve ser maior de idade');

  next();
};

const isValidTalk = (req, _res, next) => {
  const { talk } = req.body;

  if (!talk) {
    throw err(400, 'O campo "talk" é obrigatório');
  }

  next();
};

const isValidWatchedAt = (req, _res, next) => {
  const { talk: { watchedAt } } = req.body;

  if (!watchedAt) throw err(400, 'O campo "watchedAt" é obrigatório');

  const REGEX = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/g;
  if (!REGEX.test(watchedAt)) {
    throw err(400, 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
  }

  next();
};

const isValidRate = (req, res, next) => {
  const { talk: { rate } } = req.body;

  if (!Number.isInteger(rate)) {
    throw err(400, 'O campo "rate" é obrigatório');
  }

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    throw err(400, 'O campo "rate" deve ser um inteiro de 1 à 5');
  }

  next();
};

const talker = [
  isValidName,
  isValidAge,
  isValidTalk,
  isValidWatchedAt,
  isValidRate,
];

module.exports = {
  talker,
};
