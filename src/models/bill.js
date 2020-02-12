const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// chool : {type: Schema.Types.ObjectId, ref:'School'}
const Bill = new Schema({
    billNumber: {
        type: Number,
        index: true,
        unique: true,
        required: [true, 'Bill must have a number.']
    },
    
    amount: {
        type: Number,
        index: true,
        unique: false,
        required: [true, 'Bill must have a an Amount.']
    },
    dueDate: {
        type: Date,
        index: true,
        unique: false,
        required: [true, 'Bill must have a an due date.'],
        default : Date.now
    },
    billDate: {
        type: Date,
        index: true,
        unique: false,
        required: [true, 'Bill must have a an due date.'],
        default : Date.now
    },
    unitConsumed: {
        type: Number,
        index: true,
        unique: false,
        required: [true, 'Bill must have a unit Consumed.']
    },
    process: {
        type: String,
        enum:['paid', 'unpaid'],
        index: true,
        unique: false,
        required: [true, 'Bill must have a process.']
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
})

module.exports = mongoose.model('Bill', Bill)