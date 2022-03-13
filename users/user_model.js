const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: Number, String,
});

const users = mongoose.model('users',userSchema);
module.exports = users;