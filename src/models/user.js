const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: String,
    lastname: String,
    email: String,
    dogs: [{
        type: Schema.Types.ObjectId,
        ref: 'dog'
    }]
})

module.exports = mongoose.model('user', userSchema)