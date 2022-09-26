const http = require('http');
const url = require('url');
const qs = require('querystring');
const mysql = require('mysql');
const config = require('./mysql.json');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    switch(pathname) {
    case '/':                   // 초기 홈 화면
        const conn = mysql.createConnection(config);
        conn.connect();
        const sql = `SELECT * FROM tigers WHERE isDeleted=0;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            let trs = template.trsGen(rows);
            let html = template.home(trs);
            res.end(html);
        });
        conn.end();
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
                let player = param.player;
                let backNo = parseInt(param.backNo);
                let position = param.position;

                const conn = mysql.createConnection(config);
                conn.connect();
                const sql = `INSERT INTO tigers (player, backNo, POSITION)
                            VALUES (?, ?, ?);`;
                conn.query(sql, [player, backNo, position], (err, fields) => {
                    if (err)
                        throw err;
                    res.writeHead(302, {'Location': '/'});
                    res.end();
                });
                conn.end();
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