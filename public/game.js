'use strict'
// Недоделанная логика для доски
const board = [];

class Cell {constructor (id, empty = true, status = '')  {
    this.id = id;
    this.empty = empty;
    this.status = status;
    }
}

for (let i = 0; i < 9; i++){
    const cell = new Cell (i);
    board.push(cell);
}


console.log(board);

console.log('-------------------------------');
// Основа для игроков, также недоделанная
class User {constructor (name, turn = true) {
    this.name = name;
    this.turn = turn;
    }
    move () {
        console.log('Ход Сделан');
        this.turn = false;
    }
}

class Owner extends User {
    super (mark = 'X') {
        this.mark = mark;
    }
    createGame () {
        console.log('Игра создана');
    }
}

class Player extends User {
    super (mark = 'O') {
        this.mark = mark;
    }
    joinGame () {
        console.log('Игрок присоединился к игре');
    }
}

class Spectator extends User {
    spectate () {
        this.turn = false;
        console.log('Наблюдатель смотрит игру');
    }
}

const test = new Owner ('vasya');
test.createGame();
test.move();
console.log(test);

const test1 = new Player ('Petya');
test1.joinGame();
test1.move();
console.log(test1);

const test2 = new Spectator ('kolya');
test2.spectate();
console.log(test2);