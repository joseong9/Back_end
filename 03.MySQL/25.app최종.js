const http = require('http');
const url = require('url');
const qs = require('querystring');
const dm = require('./db-module');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    switch(pathname) {
    case '/':                   // 초기 홈 화면
        dm.getList(rows => {
            const trs = template.trsGen(rows);
            const html = template.home(trs);
            res.end(html);
        });
        break;
    case '/create':
        if (req.method == 'GET') {      // 입력 폼 보여주기
            let html = template.createForm();
            res.end(html);
        } else {                        // 사용자 입력 -> DB
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                const player = param.player;
                const backNo = parseInt(param.backNo);
                const position = param.position;

                dm.insertPlayer([player, backNo, position], () => {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                });
            });
        }
        break;   
    case '/update':
        if (req.method == 'GET') {              // 수정입력할 폼 보여주기
            const id = parseInt(query.id);
            dm.getPlayer(id, rows => {
                const player = rows[0].player;
                const backNo = rows[0].backNo;
                const position = rows[0].position;
                const html = template.updateForm(id, player, backNo, position);
                res.end(html);
            });
        } else {                                // DB에 수정하기
            let body = '';
            req.on('data', data => {
                body += data;
            });
            req.on('end', () => {
                const param = qs.parse(body);
                const id = parseInt(param.id);
                const player = param.player;
                const backNo = parseInt(param.backNo);
                const position = param.position;

                dm.updatePlayer([player, backNo, position, id], () => {
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                });
            });
        }
        break;
    case '/delete':
        const html = template.deleteForm(parseInt(query.id));
        res.end(html);
        break;
    case '/deleteConfirm':
        dm.deletePlayer(parseInt(query.id), () => {
            res.writeHead(302, {'Location': '/'});
            res.end();
        });
        break;
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();        
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});