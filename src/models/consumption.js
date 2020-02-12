const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Consumption = new Schema({
    date : {
        type : Date,
        index : true,
        required : [true, 'The date of consumption is required'],
        unique: false
    },
    previousConsumed : {
        type : Number,
        index : true,
        required : [true, 'The date of consumption is required'],
        unique: false
    },
    consumed : {
        type : Number,
        index : true,
        required : [true, 'The consumed is required'],
        unique: false
    },
    clientId : {
        type : Schema.Types.ObjectId,
        ref: 'Client'
    },
})

module.exports = mongoose.model('Consumption', Consumption)