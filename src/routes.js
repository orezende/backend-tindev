const DeveloperController = require('./controllers/DeveloperController');
const express = require('express');

const routes = express.Router();

routes.post('/devs', DeveloperController.store);

module.exports = routes;