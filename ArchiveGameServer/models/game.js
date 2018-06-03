var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Player = require('./player');

var GameSchema = new Schema({
    gameID: String,
    gameStatus: String,
    gameLength: String
})

module.exports = mongoose.model('Game', GameSchema);