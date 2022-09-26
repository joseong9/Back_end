
const http = require('http');
const url = require('url');
const template = require('./view/template_bs5');
const mysql = require('mysql');
const config = require('./mysql.json');

http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    switch(pathname) {
    case '/':
        const conn = mysql.createConnection(config);
        conn.connect();
        const sql = `SELECT * FROM tigers where isDeleted=0;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            const trs = template.trsGen(rows);
            const html = template.home(trs);
            res.end(html);
        });
        conn.end();
        break;
    default:
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});