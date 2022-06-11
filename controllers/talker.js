const talker = require('../services/talker');

const getAll = async (_req, res, next) => {
  try {
    const talkers = await talker.getAll();

    return res.status(200).json(talkers);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
