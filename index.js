import express from 'express';     //import expressApi from express
import routerUsers from './src/users/user_router.js';
import routerMovies from './src/movies/movies_router.js';
import  connection  from './config/database.js';
import dotenv from 'dotenv';


const app = express();

dotenv.config();

await connection();

app.use(express.json());

app.set("port",process.env.PORT  || 3000);

app.use('/',routerMovies);
app.use('/',routerUsers);

app.listen(app.get("port"),()=>{
    console.log('Servidor levantado en puerto ' + process.env.PORT);
});

//app.listen(8020,()=>console.log('Servidor levantado en puerto 8020'));



