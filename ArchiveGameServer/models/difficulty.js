var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DifficultySchema = new Schema({
    difficultyID: String,
    difficultyLevel: String,
})

module.exports = mongoose.model('Answear', AnswearSchema);