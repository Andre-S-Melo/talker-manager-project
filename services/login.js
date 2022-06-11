const crypto = require('crypto');

const createToken = async () => {
  const token = crypto.randomBytes(8).toString('hex');

  return token;
};

module.exports = {
  createToken,
};
