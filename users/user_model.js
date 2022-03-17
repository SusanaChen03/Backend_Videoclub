import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: Number, String,
});

const users = mongoose.model('users',userSchema);

export default users;