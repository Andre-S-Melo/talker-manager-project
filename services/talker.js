const data = require('../utils/data');
// const err = require('../utils/error');

const getAll = async () => {
  const talkers = await data.read();

  if (talkers === 0) return '[]';
  return talkers;
};

module.exports = {
  getAll,
};
