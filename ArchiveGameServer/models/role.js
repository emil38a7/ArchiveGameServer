var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
    roleID: String,
    roleName: String,
})

module.exports = mongoose.model('Role', RoleSchema);