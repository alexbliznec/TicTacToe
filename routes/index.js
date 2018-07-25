const controller = require('../controllers');
const express = require('express');
const app = express();

module.exports = function (req, res) {
    app.get('/api/color', controller.getRandomColor);
    console.log('111');
}
module.exports = function (req, res) {
    console.log('hello from routes');
    app.get('/', controller.getHome());
    
}
