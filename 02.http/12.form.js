const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring')

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
            req.on('data', data => {
                body += data;
            });
            req.on('end', ()=> {
                let param = qs.parse(body);
                //console.log(param);
                //console.log(param.uid, param.pwd);
                res.end(`<h1>UID:${param.uid}, PWD:${param.pwd}</h1>`)
            });
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