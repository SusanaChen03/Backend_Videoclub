const express = require('express');
const router = express.Router();
module.exports = router;

const middleware = require ('./movies_controller.js');


router.post('/movies',middleware.postMovies);

router.get('/movies',middleware.getMovies);

router.get('/movies/:id',middleware.getById);

router.patch('/movies',middleware.updateMovies);

router.delete('/movies',middleware.deleteMovies);

