const express = require('express');

// creating the router
const dashRouter = express.Router();
const dashController = require('../controllers/dashController');

// profile 
dashRouter.get('/profile', dashController.profile);

// exporting our dash router
module.exports = { dashRouter };