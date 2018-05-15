var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GameSchema = new Schema({
    gameID: String,
    questionRelationID: String,
    playerRelationID: String
})

module.exports = mongoose.model('Game', GameSchema);