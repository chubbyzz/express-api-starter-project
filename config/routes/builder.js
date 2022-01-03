const app = require('./../app');
const router = app.Router();
const routes = require('./format').routes;

function buildRoute(route) {
    const controller = require(`./../../src/controllers/${route.controller}`);
    const action = controller[route.action]
    router[route.type](route.path, action)
}

function make() {
    routes.map(buildRoute)
}

make();

module.exports = app;

