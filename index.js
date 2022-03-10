const express = require('express');
const app = express();
const port = 8020;
const routerMovies = require('./movies/movies_router');
//const routerUsers = require('./users/user_router');

const mongoose = require ('mongoose');
 
mongoose.connect('mongodb://localhost:27017/videoclub',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("chachi")).catch((error)=>{console.log(error)});

app.use(express.json())

app.use('/',routerMovies);

//app.use('/',routerUsers);
app.listen(port,()=>console.log('Servidor levantado en puerto 8020'));




/*const p = mongoose.connect('mongodb://localhost:27017/text',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});   //devuelve una promesa
p.then(()=>console.log("chachi"));
p.catch((error)=>{console.log(error)});*/