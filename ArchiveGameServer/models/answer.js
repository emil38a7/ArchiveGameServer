var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    answerID: String,
    questionID: String,
    correctAnswer: Boolean
})

module.exports = mongoose.model('Answer', AnswerSchema);