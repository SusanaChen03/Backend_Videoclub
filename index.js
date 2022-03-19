import express from 'express';     //import expressApi from express
import routerUsers from './src/users/user_router.js';
import routerMovies from './src/movies/movies_router.js';
import  connection  from './config/database.js';


const app = express();

//dotenv.config()
 await connection();

app.use(express.json());

app.use('/',routerMovies);
app.use('/',routerUsers);

app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"),()=>{
    console.log('Servidor levantado' );
});

//app.listen(8020,()=>console.log('Servidor levantado en puerto 8020'));



