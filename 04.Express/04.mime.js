const express = require('express');
const app = express();
const fs = require('fs')

// request header의 값을 읽기
app.get('/', (req, res) => {
    const agent = req.header('User-Agent');
    res.send(`<h3>MINE: multipurpose Internet Mail Extension</h3>`);
});

app.get('/image', (req, res) => {
    fs.readFile('public/고양이.jpg', (err, image) => {
        res.type('image/jpg');
        res.send(image);
    });
});

app.get('/audio', (req, res) => {
    fs.readFile('public/mp3_sample.mp3', (err, audio) => {
        res.type('audio/mp3');
        res.send(audio);
    });
});

app.get('/video', (req, res) => {
    fs.readFile('public/mp4_sample.mp4', (err, video) => {
        res.type('video/mp4');
        res.send(video);
    });
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});

app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000')
});