const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User  = new Schema({
    username: {type: String, index: true, unique: true, required:[true, 'User must have a username.']},
    email : { type: String, index: true, unique: true, required: [true, 'User must have an email.']},
    phone : {type: String, index: true, unique: true, required: true},
    password : {type: String, required: [true, 'User must have a password.']},
    country: {type:String, required: true},
    language: {type: String, required: true},
    about: {type:String},
    image: {type: String},
    signingat: {type: Date, default: Date.now()},
    updateat: {type: Date, default: Date.now()},
    lastlogin:{type:Date},
    lastactivity: {type: Date},
    connected :{ type: Boolean, default: false},
    school : {type: Schema.Types.ObjectId, ref:'School'}
});
module.exports = mongoose.model('User', User);