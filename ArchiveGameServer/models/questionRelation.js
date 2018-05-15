var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionRelationSchema = new Schema({
    questionID: String,
    gameID: String,
})

module.exports = mongoose.model('QuestionRelation', QuestionRelationSchema);