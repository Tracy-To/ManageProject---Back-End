const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: String}
})

const User = mongoose.model('User', userSchema)

module.exports = User