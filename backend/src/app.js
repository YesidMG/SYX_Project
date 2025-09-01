const express = require('express');
const app = express();

app.use(express.json());

const entitiesRouter = require('./infrastructure/routers/entities.router');
app.use('/entities', entitiesRouter);

module.exports = app;