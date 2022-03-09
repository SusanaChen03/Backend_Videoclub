const express = require('express');
const app = express();
const port = 8080;
const router = require('./movies/movies_router');

app.listen(port,()=>console.log('Servidor levantado en puerto 8080'));

app.use('/',router);
