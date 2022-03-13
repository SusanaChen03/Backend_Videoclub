
//const movies = require('./movies_model');
const Movie = require('./movies_model');



//Añadir un objeto nuevo
module.exports.postMovies = async (req,res)=>{

    const movie = new Movie(req.body);
    await movie.save();
    res.json(movie);
};


//Búsqueda por query params, nombre de película, genero y actor
module.exports.getMovies = async (req,res)=>{

    if(req.query.name){
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

// Búsqueda por id
module.exports.getById = async (req,res)=>{

    let findId = await Movie.findById(req.params.id);
    res.json (findId);
};


//Actualización de nombre de película
module.exports.updateMovies = async (req,res)=>{

    await Movie.updateOne({name: req.query.name}, {name:req.body.name})
    res.status(200).json('changes correctly')
};

//Borrar objeto por nombre
module.exports.deleteMovies = async (req,res)=>{

    if(req.query.name){
       res.json(await movies.deleteOne({name: req.query.name}));
    }
};




























