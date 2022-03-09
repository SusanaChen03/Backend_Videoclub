const express = require('express');
const app = express();
const port = 8020;
const router = require('./movies/movies_router');

app.listen(port,()=>console.log('Servidor levantado en puerto 8020'));

app.use('/',router);
