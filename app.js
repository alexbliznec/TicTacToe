const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const config = require('./config');
const router = require('./routes');

const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.set('port', config.get('port'));
app.use(express.static(path.join(__dirname, 'public')));// подтягиваю выполнение html

app.all('*', router);

/*app.get('/', (req, res) => {
    res.send('Hello from server');
    app.emit('connection');//вызывю событие присоединения к серверу
});*/

app.post('/register', urlEncodedParser, (req, res) => {
    console.log('11');
    console.log(req.body);
    res.send('11');

});

/*app.get('/api/color', (req, res) => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    res.send(randomColor);
});*/

app.get('/api/changeColor', (req, res) => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    res.send(randomColor);
});

app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/public/dashBoard.html');
});



app.on('connection', () => { //подключаю слушателя на событие коннекшн
    console.log('новое подключение');
})


console.log(`слушаем порт ${app.get('port')}`);

app.listen(app.get('port'));