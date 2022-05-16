const express = require('express');

// creating the router
const authRouter = express.Router();
const authController = require('../controllers/authController');

// register
authRouter.get('/register', authController.renderRegisterUser);
authRouter.post('/register', authController.registerUser);

// login
authRouter.get('/login', authController.renderLoginUser);
authRouter.post('/login', authController.loginUser);



// exporting our auth router
module.exports = { authRouter };