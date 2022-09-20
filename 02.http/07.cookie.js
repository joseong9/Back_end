const http = require('http');

const server = http.createServer((req, res) => {
    const cookie = req.headers.cookie;
    console.log(cookie);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['breakfast=toast', 'dinner=bibimbab']
    });
    res.end(`<h1>${cookie}</h1>`);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});