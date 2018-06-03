var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    questionID: String,
    questionText: String,
    questionAnswers: [{
        answerID: String,
        answerText: String,
        questionID: String,
        correctAnswer: String}],
    questionDifficulty: String,
    questionIndex: String

})

module.exports = mongoose.model('Question', QuestionSchema);