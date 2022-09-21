const http = require('http');
const fs = require('fs');
const url = require('url')

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let method = req.method;
    switch(pathname){
    case '/input':
        if (method === 'GET') { //입력 화면 양식
            fs.readFile('view/12.form.html', 'utf8', (err, html) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(html);
            });
        }else { //method가 POST인 경우
            let body = '';
            req.on('data', )
            res.end('<h1>Received Form data</h1>')
        };
        break;
    default :
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});