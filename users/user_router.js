import express from 'express';
const router = express.Router();
import {postUser, getUser, findById, updateUser, deleteUser, loginUser} from "./user_controller.js";


router.post('/user', postUser);

router.get('/user', getUser);

router.get('/user/:id', findById);

router.patch('/user', updateUser);

router.delete('/user/:id', deleteUser);

router.post('/login', loginUser);


export default router;