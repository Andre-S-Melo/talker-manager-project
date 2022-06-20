const talker = require('../services/talker');

const getAll = async (_req, res, next) => {
  try {
    const talkers = await talker.getAll();

    return res.status(200).json(talkers);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const getTalker = await talker.getById(req.params);

    return res.status(200).json(getTalker);
  } catch (err) {
    next(err);
  }
};

const search = async (req, res, next) => {
  try {
    const getBySearch = await talker.search(req.query);

    return res.status(200).json(getBySearch);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const newTalker = await talker.create(req.body);

    return res.status(201).json(newTalker);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const editedTalker = await talker.update(req.body, req.params);

    return res.status(200).json(editedTalker);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await talker.remove(req.params);

    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  search,
  create,
  update,
  remove,
};
