const express = require ('express');
const router = express.Router();
module.exports = router;

const middleware = require ('./user_controller.js');


router.post('/user',middleware.postUser);

router.get('/user', middleware.getUser);

router.get('/user/:id',middleware.findById);

router.patch('/user',middleware.updateUser);

router.delete('/user/:id',middleware.deleteUser);

