const express = require('express');

// creating the router
const authRouter = express.Router();
const authController = require('../controllers/authController');
const { logoutRequired } = require('../middlewares/auth')

// register
authRouter.get('/register', logoutRequired, authController.renderRegisterUser);
authRouter.post('/register', logoutRequired, authController.registerUser);

// login
authRouter.get('/login', logoutRequired, authController.renderLoginUser);
authRouter.post('/login', logoutRequired, authController.loginUser);



// exporting our auth router
module.exports = { authRouter };