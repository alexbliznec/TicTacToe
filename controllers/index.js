
module.exports.getRandomColor = (req, res) => {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    res.send(randomColor);
}

module.exports.getHome = (req, res) => {
    console.log('hello from controller');
    res.send('Hello from server');
    app.emit('connection');//вызывю событие присоединения к серверу
    
}