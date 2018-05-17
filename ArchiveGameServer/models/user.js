﻿var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userID: String,
    userName: String,
    userEmail: String,
    userPsssword: String,
    userRole: String,
})

module.exports = mongoose.model('User', UserSchema);