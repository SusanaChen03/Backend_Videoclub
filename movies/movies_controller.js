
const Movie = require('./movies_model');


module.exports.postMovies = async (req,res)=>{    //añadir un objeto
    const movie = new Movie(req.body);
    console.log(req.body);
    await movie.save();
    res.json(movie);
};


module.exports.getMovies = async (req,res)=>{    //buscar por query params
    if(req.query.name){                            //busqueda por nombre de película, género y actor
        const list = await Movie.find({
            name:req.query.name
        });
        res.json (list);
    }else if (req.query.genre){
        const list = await Movie.find({
            genre:req.query.genre
        });
        res.json (list);
    }else if (req.query.actor){
        const list = await Movie.find({
            actor:req.query.actor
        });
        res.json (list);
    }else{
        const list = await Movie.find({});
        res.json (list);
    }

};


module.exports.getById = async (req,res)=>{

    let findId = await Movie.findById(req.params.id);
    res.json (findId);
};
































/*module.exports.getByTitle = (req,res)=>{
    
    let findTitle = movies.find((element)=>{
        if(element.title.toUpperCase() == req.params.title.toUpperCase()){
            return true;
        };
    });
    console.log(findTitle);
    res.send(findTitle);
};/*



/*module.exports.getmovies = async (req,res)=>{    //buscar por query params
    if(req.query.name){
        const list = await Movie.find({
            name:req.query.name
        });
        res.json (list);
    }else {
        const list = await Movie.find({});
        res.json (list);
    } 
};*/

