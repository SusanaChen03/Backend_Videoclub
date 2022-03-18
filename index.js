import express from 'express';     //import expressApi from express

import routerUsers from './users/user_router.js';
import routerMovies from './movies/movies_router.js';

import  connect  from './config/database.js';
connect();


const app = express();

const port = 8020;

app.use(express.json());

app.use('/',routerMovies);
app.use('/',routerUsers);

app.listen(port,()=>console.log('Servidor levantado en puerto 8020'));



