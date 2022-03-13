const express = require ('express');
const router = express.Router();
module.exports = router;

const middleware = require ('./user_controller.js');


//router.post('/user',middleware.postUser)