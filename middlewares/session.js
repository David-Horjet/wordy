const session = require('express-session');
const MongoStore = require('connect-mongo');
const {
     loginUser
} = require('../controllers/authController');


const newSession = session({
     secret: 'superSecret',
     resave: true,
     saveUninitialized: true,
     cookies: {
          maxAge: 60000
     },
     store: MongoStore.create({
          mongoUrl: process.env.MONNGO_URI
     })
});

module.exports = {
     newSession,
};