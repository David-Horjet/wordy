const express = require('express');

// creating the router
const dashRouter = express.Router();
const dashController = require('../controllers/dashController');

// profile 
dashRouter.get('/profile', dashController.profile);
dashRouter.get('/logout', dashController.logout);

// exporting our dash router
module.exports = { dashRouter };