const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const view = require('./view/index');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    switch(pathname) {
    case '/':
        if (query.id === undefined) {     // 초기 화면
            fs.readdir('data', (err, files) => {
                const title = '웹 기술';
                const list = template.listGen(files);
                const content = template.HOME_CONTENTS;
                const html = view.index(title, list, content);
                res.end(html);
            });
        } else {                        // 개별 아이템에 대한 화면
            fs.readdir('data', (err, files) => {
                const title = query.id;
                const list = template.listGen(files);
                const filename = `data/${query.id}.txt`;
                fs.readFile(filename, 'utf8', (err, content) => {
                    const html = view.index(title, list, content);
                    res.end(html);
                });
            });
        }
        break;
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});