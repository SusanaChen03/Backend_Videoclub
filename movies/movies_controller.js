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


module.exports.getByTitle = (req,res)=>{
    
    let findTitle = movies.find((element)=>{
        if(element.title.toUpperCase() == req.params.title.toUpperCase()){
            return true;
        };
    });
    console.log("resuleta" +findTitle);
    res.send(findTitle);
};
