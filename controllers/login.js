const login = require('../services/login');

const getToken = async (_req, res, next) => {
  try {
    const token = await login.createToken();

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getToken,
};
