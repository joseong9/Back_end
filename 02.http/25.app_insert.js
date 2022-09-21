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
                const content = template.HOME_CONTENTS.replace(/\n/g,'<br>');
                const control = template.buttonGen();
                const html = view.index(title, list, content, control);
                res.end(html);
            });
        } else {                        // 개별 아이템에 대한 화면
            fs.readdir('data', (err, files) => {
                const title = query.id;
                const list = template.listGen(files);
                const filename = `data/${query.id}.txt`;
                fs.readFile(filename, 'utf8', (err, data) => {
                    let content = data.replace(/\n/g,'<br>');
                    const control = template.buttonGen(title);
                    const html = view.index(title, list, content, control);
                    res.end(html);
                });
            });
        }
        break;
    case '/create':
        if (req.method === 'GET') {
            fs.readdir('data', (err, files) => {
                const title = '글 생성';
                const list = template.listGen(files);
                const content = template.createForm();
                const html = view.index(title, list, content, ' ');
                res.end(html);
            });
        } else {
            let body = '';
            req.on('data', data => {
                body+= data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                if (param.title.trim().length == 0) {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                } else {
                    const fname =  `data/${param.title}.txt`;
                fs.writeFile(fname, param.content, err => {
                    res.writeHead(302, {'Location': `/?id=${param.title}`});
                    res.end();
                });
                }
            });
        }
        break;
    case '/update':
        if (req.method === 'GET') {
            fs.readdir('data', (err, files) => {
                const title = `${query.id} 수정`;
                const list = template.listGen(files);
                const filename = `data/${query.id}.txt`;
                fs.readFile(filename, 'utf8', (err, data) => {
                    const content = template.updateForm(query.id, data)                    
                    const html = view.index(title, list, content, ' ');
                    res.end(html);
                });
            });
        } else {
            let body = '';
            req.on('data', data => {
                body+= data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                if (param.title.trim().length == 0) {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                } else {
                    const fname = `data/${param.title}.txt`;
                    fs.writeFile(fname, param.content, ree => {
                        if (param.original != param.title) {    // 제목이 변경된 경우
                            fs.unlink(`data/${param.original}.txt`, err => {
                                res.writeHead(302, {'Location': `/?id=${param.title}`});
                                res.end();
                            });
                        } else {
                            res.writeHead(302, {'Location': `/?id=${param.title}`});
                            res.end();
                        }
                    });
                }
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