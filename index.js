const express = require('express');     //import expressApi from express
const app = express();
const port = 8020;

const routerMovies = require('./movies/movies_router');     //import routerMovies from ('/movies/movies_router')
const routerUsers = require('./users/user_router');

const mongoose = require ('mongoose');


mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Servidor de mongo escuchando")).catch((error)=>{console.log(error)});


app.use(express.json());
app.use('/',routerMovies);
app.use('/',routerUsers);


app.listen(port,()=>console.log('Servidor levantado en puerto 8020'));



