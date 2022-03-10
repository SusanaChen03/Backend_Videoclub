const express = require('express');
const router = express.Router();
module.exports = router;

const middleware = require ('./movies_controller.js');


router.post('/movies',middleware.postmovies);

router.get('/movies',middleware.getmovies);

router.get('/movies/:id',middleware.getById);

