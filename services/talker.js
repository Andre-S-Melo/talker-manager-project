const data = require('../utils/data');
const err = require('../utils/error');

const getAll = async () => {
  const talkers = await data.read();

  if (talkers === 0) return '[]';
  return talkers;
};

const getById = async ({ id }) => {
  const talkers = await getAll();

  const getTalker = talkers.find((talker) => talker.id === (+id));

  if (!getTalker) throw err(404, 'Pessoa palestrante não encontrada');

  return getTalker;
};

const search = async ({ q }) => {
  const talkers = await getAll();
  if (!q) return talkers;

  const getBySearch = talkers.filter((talker) => talker.name.includes(q));
  if (!getBySearch) return '[]';

  return getBySearch;
};

const create = async (body) => {
  const talkers = await getAll();
  const newTalker = { id: talkers.length + 1, ...body };

  await data.write([...talkers, newTalker]);
  return newTalker;
};

const update = async ({ name, age, talk }, { id }) => {
  const talkers = await getAll();
  const findTalker = talkers.findIndex((talker) => talker.id === (+id));

  talkers[findTalker] = { ...talkers[findTalker], name, age, talk };
  await data.write(talkers);
  return talkers[findTalker];
};

const remove = async ({ id }) => {
  const talkers = await getAll();
  const deleteTalker = talkers.filter((talker) => talker.id !== (+id));

  await data.write(deleteTalker);
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  remove,
};
