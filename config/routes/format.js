const routesConfig = require('./routes.json');
const validHttpTypes = ['options', 'get', 'head', 'put', 'post', 'delete', 'patch'];

function make (config) {
    if(config.constructor === Array)
        return formatedRoutes(config)
    return formatedRoute(config)
}

function formatedRoutes (nestedConfig) {
    return nestedConfig.map((config) => formatedRoute(config)).flat(Infinity)
}

function formatedRoute (config) {
    const routes = config.routes;
    const routeList = []
    for(const path in routes) {
        const type = validateType(routes[path].type);
        const controller = validateControllerPresence(routes[path].controller);
        routeList.push({
            'controller': `${controller}Controller`,
            'type': type,
            'path': `${config.prefix || ''}${path}`
        })
    }
    return routeList
}

function validateControllerPresence(value) {
    if (value == null)
        throw 'The Controller should be present';
    
    return value.charAt(0).toUpperCase() + value.slice(1)
}

function validateType (type) {
    if(type == null)
        type = 'get'

    if (! validHttpTypes.includes(type))
        throw `Unknown Route Type: "${type}" is not a valid type`;

    return type
}

const routes = make(routesConfig);

module.exports = {
    make,
    formatedRoutes,
    formatedRoute
};