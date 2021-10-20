// will user server.js instead of app.js

'use strict';

const express = require('express');
const app = express();
require('dotenv').config();

const logger = require('./middleware/logger.js');
// const validator = require('./middleware/validator');
const _404 = require('./error-handlers/404');
const _500 = require('./error-handlers/500');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
// app.use(validator);

app.get('/person', (request, response) => {
  let name = request.query.name;
  response.send({ name: name });
});

app.use(_404);
app.use(_500);

module.exports = {
  app,
  start: () => app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)),
};
