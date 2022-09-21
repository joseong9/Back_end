
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let method = req.method;
    console.log(pathname, method);

    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>${method}: ${pathname}</h1>`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});