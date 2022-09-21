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
        if (query.id === undefined) {     // 초기화면
            fs.readdir('data', (err, files)=>{
                const title = '웹기술';
                const list = template.listen(files);
                const content = template.HOME_CONTENTS.replace('\n', '<br>');;
                const html = view.index(title, list, content);
                res.end(html);
            });
        } else {                        // 개별 item에 대한 화면
            fs.readdir('data', (err, files)=>{
                const title = query.id;
                const list = template.listen(files);
                const filename = `data/${query.id}.txt`;
                fs.readFile(filename, 'utf8', (err, data) => {
                    let content = data.replace('\n', '<br>');
                    const html = view.index(title, list, content);
                    res.end(html);
                });
            });

        }
        break;
    case '/create':
        if (req.method === 'GET') {
            fs.readdir('data', (err, files)=>{
                const title = '글 생성';
                const list = template.listen(files);
                const content = template.createForm();
                const html = view.index(title, list, content);
                res.end(html);
            });
        } else {

        }
        break;
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, ()=> {
    console.log('Server running at http://localhost:3000')
})