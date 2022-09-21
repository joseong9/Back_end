const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('media/file_example_MP4_480_1_5MG.mp4', (err, video) => {
        res.writeHead(200, {'Content-Type': 'video/mp4'});
        res.end(video);
    });
});

server.listen(3000);