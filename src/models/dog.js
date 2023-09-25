const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    state: String,
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = mongoose.model('dog', dogSchema)