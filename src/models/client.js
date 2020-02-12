const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema({
    firstName: {
        type: String,
        index: true,
        unique: false,
        required: [true, 'The name is required']
    },
    firstName: {
        type: String,
        index: true,
        unique: false,
        required: [true, 'The name is required']
    },
    lasttName: {
        type: String,
        index: true,
        unique: false,
        required: [false, 'The name is required']
    },
    birthDate: {
        type: Date,
        index: true,
        unique: false,
        required: [true, 'The name is required']
    },
    profession: {
        type: String,
        index: true,
        unique: false,
        required: [true, 'The profession is required']
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: [true, 'The Email is required']
    },
    gender: {
        type: String,
        enum: ['Male','Female'],
        index: true,
        unique: false,
        required: [true, 'The gender is required']
    },
    phoneNumber: {
        type: Number,
        index: true,
        unique: true,
        required: [true, 'The phone number is required']
    },
    userName: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    password: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    address: {
        type: String,
        index: true,
        unique: false,
        required: [true, 'The addresse is required']
    },
    poBox: {
        type: String,
        index: true,
        unique: false,
        required: [true, 'The PO BOX is required']
    },
    picture: {
        type: String
    },
    cityId: {
        type: Schema.Types.ObjectId,
        ref: 'Cities'
    },
})

module.exports = mongoose.model('Client', CLient)