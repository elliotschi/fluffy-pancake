'use strict'
const express = require('express');
const app = express();
const middleware = require('./middleware');

middleware(app);

module.exports = app;
