const home = require('./home.route');
const user = require('./user.route');
const notFound = require('./notFound.route');


function routes(req, res) {
    const { url, method, headers } = req;

    switch (url) {
        case '/':
            home(req, res);
            break;
        case '/user':
            if (method === 'GET') new user(req, res).get();
            if (method === 'POST') new user(req, res).post();
            if (method === 'DELETE') new user(req, res).delete();
            break;
        default:
            notFound(req, res);
            break;
    }
}


module.exports = routes;