const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Cities = new Schema({
    idCity : {
        type: Number,
        index: true,
        unique: true,
        required : ['The id of city is required']
    },
    nameCity: {
        type: String,
        index: true,
        unique: false,
        required : ['The name of city is required']
    }
})

module.exports = mongoose.model('Cities', Cities)