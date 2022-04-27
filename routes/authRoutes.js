const express = require('express');

// creating the router
const authRouter = express.Router();
const authController = require('../controllers/authController');

// new post
authRouter.get('/register', authController.registerUser);



// exporting our auth router
module.exports = { authRouter };