const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User  = new Schema({
    fullName: {type: String, index: true, unique: false, required:[true, 'User must have a username.']},
    matricule: {type: String, index: true, unique: true, required:[true, 'User must have a username.']},
    userName: {type: String, index: true, unique: false, required:[true, 'User must have a username.']},
    type :{type: String,  index: true, unique: false, required:[true, 'User must have a username.']},
    password : {type: String, required: [true, 'User must have a password.']},
    picture: {type: String},
});
module.exports = mongoose.model('User', User);