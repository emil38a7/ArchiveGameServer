var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerID: String,
    answerText: String,
    questionID: String,
    correctAnswer: String
})

module.exports = mongoose.model('Answer', AnswerSchema);