const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('media/고양이.jpg', (err, image) => {
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        res.end(image);
    });
});

server.listen(3000);