const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>EJS page rendering</h1>`);
});

app.get('/data', (req, res) => {
    fs.readFile('views/21.ejspage.ejs', 'utf8', (err, data) => {
        const html = ejs.render(data, {title: 'fs로 파일에서 읽은 후 렌더링'});
        res.send(html);
    });
});

app.get('/file', (req, res) => {
    ejs.renderFile('views/21.ejspage.ejs',
                    {title: 'ejs에서 직접 파일을 읽은 후 렌더링'},
                    (err, html) => {
                        res.send(html);
                    });
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});