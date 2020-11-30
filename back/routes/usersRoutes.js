const express = require('express');
const route = express.Router();
const userController = require('../controllers/usersController');

route.post('/signup', userController.signUp);
route.post('/login', userController.signIn);



module.exports = route;