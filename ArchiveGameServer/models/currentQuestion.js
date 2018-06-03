﻿var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CurrentQuestionSchema = new Schema({
    questionID: String,
    questionText: String,
    questionAnswers: [{
        answerID: String,
        answerText: String,
        questionID: String,
        correctAnswer: String
    }],
    questionDifficulty: String,
    questionIndex: String
})

module.exports = mongoose.model('CurrentQuestion', CurrentQuestionSchema);