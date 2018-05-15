var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswearSchema = new Schema({
    answearID: String,
    questionID: String,
    correctAnswear: Boolean
})

module.exports = mongoose.model('Answear', AnswearSchema);