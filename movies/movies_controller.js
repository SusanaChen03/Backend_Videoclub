const movies = require('./movies_model');



module.exports.getmovies = (req,res)=>{
    res.json (movies);
}