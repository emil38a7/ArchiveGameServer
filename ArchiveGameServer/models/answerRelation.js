var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerRelationSchema = new Schema({
    answerID: String,
    playerID: String,
})

module.exports = mongoose.model('AnswerRelation', AnswerRelationSchema);