var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questionID: String,
    questionText: String,
    questionDifficulty: String
})

module.exports = mongoose.model('Question', QuestionSchema);