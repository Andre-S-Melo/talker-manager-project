const data = require('../utils/data');
const err = require('../utils/error');

const getAll = async () => {
  const talkers = await data.read();

  if (talkers === 0) return '[]';
  return talkers;
};

const getById = async (id) => {
  const talkers = await data.read();

  const found = talkers.find((talker) => talker.id === (+id));

  if (!found) throw err(404, 'Pessoa palestrante não encontrada');

  return found;
};

module.exports = {
  getAll,
  getById,
};
