const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

console.log(cells);

app.use(express.static(path.join(__dirname, 'public')));// подтягиваю выполнение html

app.get('/', (req, res) => {
    res.send('Hello from server');
    app.emit('connection');//вызывю событие присоединения к серверу
});

app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/public/dashBoard.html');
});

app.on('connection', () => { //подключаю слушателя на событие коннекшн
    console.log('новое подключение');
})

app.listen(port);