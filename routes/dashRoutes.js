const express = require('express');

// creating the router
const dashRouter = express.Router();
const dashController = require('../controllers/dashController');
const {
     loginRequired
} = require('../middlewares/auth')

// profile 
dashRouter.get('/profile/:userId', loginRequired, dashController.profile);
dashRouter.get('/logout', loginRequired, dashController.logout);
dashRouter.post('/update', loginRequired, dashController.updateProfile);

// exporting our dash router
module.exports = {
     dashRouter
};