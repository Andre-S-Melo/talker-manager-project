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
    const { id } = req.params;
    const found = await talker.getById(id);

    return res.status(200).json(found);
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
    const updatedTalker = await talker.update(req.body, req.params);

    return res.status(200).json(updatedTalker);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
