const routeBuilder = require('../../../config/routes/builder');
const fakeRoutes = require('./fakeRoutes.json');

function fakeHttpMethodType (type) {
    let config = fakeRoutes.config
    config.routes['/'].type = type
    return config
}

it('shoud format a route config', () => {
    const routes = routeBuilder.formatedRoute(fakeRoutes.config)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        }
      ]);
});


it('shoud format a route config with 2 prefix', () => {
    const routes = routeBuilder.formatedRoutes(fakeRoutes.nestedConfig)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        },
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v2/"
        },
      ]);
});

it('shoud list the routes', () => {
    const routes = routeBuilder.jsonToRoutes(fakeRoutes.config)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the routes without prefix', () => {
    const routes = routeBuilder.jsonToRoutes(fakeRoutes.noPrefixconfig)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "/"
        }
      ]);
});

it('shoud list the routes without root path', () => {
    const routes = routeBuilder.jsonToRoutes(fakeRoutes.noRootConfig)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/list"
        }
      ]);
});

it('shoud fail buecouse type is invalid', () => {
    const tryToConfig = () => {
        return routeBuilder.jsonToRoutes(fakeHttpMethodType('posts'))
    }

    expect(tryToConfig).toThrow('Unknown Route Type: "posts" is not a valid type');
});

it('shoud fail buecouse controller is null is invalid', () => {
    const tryToConfig = () => {
        return routeBuilder.jsonToRoutes(fakeRoutes.noControllerConfig)
    }

    expect(tryToConfig).toThrow('The Controller should be present');
});

it('shoud list the post route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('post'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'post',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the post route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('post'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'post',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the options route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('options'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'options',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the head route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('head'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'head',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the put route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('put'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'put',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the delete route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('delete'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'delete',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the patch route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('patch'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'patch',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the get route', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType('get'))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the get route by default', () => {
    const routes = routeBuilder.jsonToRoutes(fakeHttpMethodType(undefined))
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        }
      ]);

    const nullTypeRoutes = routeBuilder.jsonToRoutes(fakeHttpMethodType(null))
    expect(nullTypeRoutes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        }
      ]);
});

it('shoud list the routes', () => {
    const routes = routeBuilder.jsonToRoutes(fakeRoutes.nestedConfig)
    expect(routes).toEqual([
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v1/"
        },
        {
          controller: 'HomeController',
          type: 'get',
          path: "api/v2/"
        },
      ]);
});