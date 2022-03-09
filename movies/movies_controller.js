const movies = require('./movies_model');



module.exports.getmovies = (req,res)=>{
    res.json (movies);
};


module.exports.getById = (req,res)=>{

    let findId = movies.find((element)=>{
        if(element.id == req.params.id){
            return true;
        }
    });
    res.send(findId);
};