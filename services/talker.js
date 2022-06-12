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

const create = async (body) => {
  const talkers = await getAll();
  const newTalker = { id: talkers.length + 1, ...body };

  // talkers.push(newTalker);
  await data.write([...talkers, newTalker]);
  return newTalker;
};

const update = async ({ name, age, talk: { watchedAt, rate } }, { id }) => {
  const talkers = await getAll();
  const findTalker = talkers.findIndex((talker) => talker.id === (+id));

  talkers[findTalker] = { ...talkers[findTalker], name, age, talk: { watchedAt, rate } };
  await data.write(talkers);
  return talkers[findTalker];
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
