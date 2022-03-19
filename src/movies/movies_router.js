import express from 'express';
const router = express.Router();

import {postMovies, getMovies, getById, updateMovies, deleteMovies} from './movies_controller.js';




router.post('/movies', postMovies);

router.get('/movies', getMovies);

router.get('/movies/:id', getById);

router.patch('/movies', updateMovies);

router.delete('/movies', deleteMovies);

export default router;