const express = require('express');
const app = express();
const port = 8020;
const mongoose = require ('mongoose');

const routerMovies = require('./movies/movies_router');
const routerUsers = require('./users/user_router');


mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Servidor de mongo levantado")).catch((error)=>{console.log(error)});





app.use(express.json());
app.use('/',routerMovies);
app.use('/',routerUsers);


app.listen(port,()=>console.log('Servidor levantado en puerto 8020'));



