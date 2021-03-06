const express = require('express');
const {
  result
} = require("lodash");
const mongoose = require("mongoose");
const {
  posts
} = require('./models/post');
const bodyParser = require('body-parser');
const {
  postRouter
} = require('./routes/postRoutes');
const {
  mainRouter
} = require('./routes/mainRoutes');
const dotenv = require('dotenv').config();
const {
  newSession
} = require('./middlewares/session');
const {
  authRouter
} = require('./routes/authRoutes');
const {
  dashRouter
} = require('./routes/dashRoutes');
const flash = require('connect-flash');

const PORT = process.env.PORT || 5000


const app = express();

// setting up the app default
app.set("view engine", "ejs");

// setting up the middleware
app.use(newSession);
app.use(express.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use("/user/profile/public/", express.static('./public'));
app.use(flash());
app.use((req, res, next) => {
  res.locals.user = req.session.user;
  res.locals.successMessage = req.flash('success');
  res.locals.errorMessage = req.flash('error');
  next();
})

// connecting to the database
dbURI = process.env.MONNGO_URI;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}.....`);
    });
  })
  .catch((error) => console.log(error));

// crud operations
app.use('/posts', postRouter);

// auth operations 
app.use('/auth', authRouter);

// dash operations 
app.use('/user', dashRouter);

// main routers
app.use(mainRouter);