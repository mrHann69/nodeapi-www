const http = require('node:http');
const routes = require('./routes/routes.js');

const app = http.createServer(routes);

module.exports = app;