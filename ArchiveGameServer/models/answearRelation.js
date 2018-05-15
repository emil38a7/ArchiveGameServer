var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswearRelationSchema = new Schema({
    answearID: String,
    playerID: String,
})

module.exports = mongoose.model('AnswearRelation', AnswearRelationSchema);