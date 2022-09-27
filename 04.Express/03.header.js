const express = require('express');
const app = express();

// request header의 값을 읽기
app.get('/', (req, res) => {
    const agent = req.header('User-Agent');
    res.send(`<h3>User-Agent: ${agent}</h3>`);
});

// response header의 값을 설정
app.get('/set/:key/value/:value', (req, res) => {
    const key = req.params.key;
    const value = req.params.value;
    res.set(key, value);
    res.send(`<h3>key:${key}, value:${value}</h3>`)
})

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');