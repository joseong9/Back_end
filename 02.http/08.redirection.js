const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(302,          // Redirection
        {'Location': 'http://www.hanbit.co.kr'});
    res.end();
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});