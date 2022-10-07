const http = require('http');
const fs = require('fs').promises
const fs2 = require('fs')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-80000'});

    res.write('<h1>Hello WORLD</h1>');

    res.end('<p>Bye SG</p>')
});

server.listen(8080);

Server.on('listening', ()=>{
    console.log("8080 리스닝 중");
});

Server.on('error', (error) =>{
    console.log(error);
});