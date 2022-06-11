const fs = require('fs/promises');

const read = async () => {
  try {
    const fileContent = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));

    return fileContent;
  } catch (err) {
    console.log(err);
  }
};

const write = async () => {
  try {
    const writingFile = JSON.stringify(await fs.writeFile('./talker.json'));

    return writingFile;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  read,
  write,
};
