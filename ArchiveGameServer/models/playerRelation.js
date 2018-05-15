var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerRelationSchema = new Schema({
    playerID: String,
    gameID: String,
})

module.exports = mongoose.model('PlayerRelation', PlayerRelationSchema);