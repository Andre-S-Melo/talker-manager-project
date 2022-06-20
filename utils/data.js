const fs = require('fs/promises');

const read = async () => {
  try {
    const readFile = JSON.parse(await fs.readFile('./talker.json', 'utf-8'));

    return readFile;
  } catch (err) {
    console.log(`Erro na leitura do arquivo: ${err.message}`);
  }
};

const write = async (newTalker) => {
  try {
    const writeFile = await fs.writeFile('./talker.json', JSON.stringify(newTalker));

    return writeFile;
  } catch (err) {
    console.log(`Erro ao escrever o arquivo: ${err.message}`);
  }
};

module.exports = {
  read,
  write,
};
