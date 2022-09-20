const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('view/03.helloworld.html', 'utf8', (err, html) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });
});
server.listen(3000);