const express = require('express');
const { result } = require("lodash");
const mongoose = require("mongoose");
const { posts } = require('./models/post');
const bodyParser = require('body-parser');
const { postRouter } = require('./routes/postRoutes');
const { mainRouter } = require('./routes/mainRoutes');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 5000


const app = express();

// setting up the app default
app.set("view engine", "ejs");

// setting up the middleware
// app.use(express.static(__dirname + "./project/wordy/public"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());

// connecting to the database
dbURI = process.env.MONNGO_URI;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(5000, () => {
      console.log(`Server is listening on port ${PORT}.....`);
    });
  })
  .catch((error) => console.log(error));

// crud operations
app.use('/posts', postRouter);

// main routers
app.use(mainRouter);