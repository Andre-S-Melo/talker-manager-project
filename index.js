const express = require('express');
const login = require('./routes/login');
const talker = require('./routes/talker');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(200).send();
});

app.use('/login', login);
app.use('/talker', talker);

app.use(errorHandler);

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));
