var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
    playerID: String,
    playerNickName: String,
})

module.exports = mongoose.model('Player', PlayerSchema);