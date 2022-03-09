const express = require('express');
const router = express.Router();
module.exports = router;

const middleware = require ('./movies_controller.js');


router.get('/movies',middleware.getmovies);