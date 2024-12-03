const fruits = require('./fruits');

function index() {
    return fruits;
}

function store(name) {
    fruits = fruits.concat(name);
}

function update(position, name) {
    if (isValidPosition(position)) {
        fruits[position] = name;
    }
}

function destroy(position) {
    if (isValidPosition(position)) {
        fruits.splice(position, 1);
    }
}

function isValidPosition(position) {
    return position >= 0 && position < fruits.length; 
}

module.exports = { index, store, update, destroy };
