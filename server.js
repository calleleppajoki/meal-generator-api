const jsonServer = require('json-server');
const server = jsonServer.create();

// Filter by req.method
server.all('*', function (req, res, next) {
  if (req.method === 'GET') {
    next() // Continue
  } else {
    res.sendStatus(403) // Forbidden
  }
})

const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);