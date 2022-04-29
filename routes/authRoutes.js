const express = require('express');

// creating the router
const authRouter = express.Router();
const authController = require('../controllers/authController');

// register
authRouter.get('/register', authController.renderRegisterUser);
authRouter.post('/register', authController.registerUser);

// login
authRouter.get('/login', authController.renderLoginUser);



// exporting our auth router
module.exports = { authRouter };