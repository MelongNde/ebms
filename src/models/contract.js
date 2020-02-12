const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contract = new Schema({
    contractNumber : {
        type: Number,
        unique: true,
        index: true,
        required: [true, 'The number of the contract is required']
    },
    contractDate : {
        type: Date,
        unique: false,
        index: true,
        required: [true, 'The date of the contract is required'],
        default: Date.now()
    },
    clientCategory : {
        type: String,
        unique: false,
        index: true,
        required: [true, 'The category of the contract is required']
    },
    meterNumber : {
        type: Number,
        unique: false,
        index: true,
        required: [true, 'The meter number of the contract is required']
    },
    clientId : {
        type : Schema.Types.ObjectId,
        ref: 'Client'
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref: 'USer'
    },
})

module.exports = mongoose.model('Contract', Contract)