const express = require('express');
const app = express();

app.use(require('./home'));
app.use(require('./login'));
app.use(require('./solicitud'));

module.exports = app;