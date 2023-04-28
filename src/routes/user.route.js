const userController = require('../controllers/user.controller');
const notFound = require('./notFound.route');
const url = require('url')

class UserRoute {
    constructor(req, res) {
        this.req = req,
            this.res = res
    }
    get() {
        this.res.writeHead(200, { 'Content-Type': 'application/json' });
        this.res.write(JSON.stringify(userController.getUsers()));
        this.res.end();
    }
    post() {
        const size = parseInt(this.req.headers['content-length'], 10)
        const buffer = Buffer.allocUnsafe(size)
        var pos = 0

        const { pathname } = url.parse(this.req.url)
        if (pathname !== '/user') {
            return notFound(this.req,this.res);
        }

        this.req
            .on('data', (chunk) => {
                const offset = pos + chunk.length
                if (offset > size) {
                    reject(413, 'Too Large', this.res)
                    return
                }
                chunk.copy(buffer, pos)
                pos = offset
            })
            .on('end', () => {
                if (pos !== size) {
                    reject(400, 'Bad Request', this.res)
                    return
                }
                const data = JSON.parse(buffer.toString())

                userController.saveUser(data);
                this.res.setHeader('Content-Type', 'application/json;charset=utf-8');
                this.res.end('response:' + JSON.stringify(data))
            })
    }
    delete() {

    }
}

module.exports = UserRoute;