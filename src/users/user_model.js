import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    role: String
});

const users = mongoose.model('users',userSchema);

export default users;