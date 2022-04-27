const session = require('express-session');

const newSession = session({
     secret: 'superSecret',
     resave: false,
     saveUninitialized: true,
     cookies: { secure: true },
     store: MongoStore.create({ mongoUrl: process.env.MONNGO_URI })
});

module.exports= { newSession };