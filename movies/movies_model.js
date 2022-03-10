
const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    genre: String,
    actors: String,
});


const movies = mongoose.model('movies', moviesSchema);
module.exports = movies;