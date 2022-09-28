const express = require('express');
const shoppingRouter = require('./routes/07.shoppingRouter');

const app = express();
app.use(express.static(__dirname + '/public'));

const bbsRouter = express.Router();
const userRouter = express.Router();
app.use('/bbs', bbsRouter);
app.use('/user', userRouter);
app.use('/shopping', shoppingRouter);

app.get('/', (req, res) => {
    res.send('<h1>Router</h1>');
});

bbsRouter.get('/list', (req, res) => {
    res.send('<h1>http://localhost:3000/bbs/list</h1>');
});
bbsRouter.get('/write', (req, res) => {
    res.send('<h1>http://localhost:3000/bbs/write</h1>');
});

userRouter.get('/list', (req, res) => {
    res.send('<h1>http://localhost:3000/user/list</h1>');
});
userRouter.get('/register', (req, res) => {
    res.send('<h1>http://localhost:3000/user/register</h1>');
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});