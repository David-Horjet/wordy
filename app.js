const express = require("express");
const { result } = require("lodash");
const mongoose = require("mongoose");
const { posts } = require('./models/post');
const bodyParser = require('body-parser');
const { postRouter } = require('./routes/postRoutes');
const { mainRouter } = require('./routes/mainRoutes');
// cons PORT = process.env.PORT


const app = express();

// setting up the app default
app.set("view engine", "ejs");

// setting up the middleware
// app.use(express.static(__dirname + "./project/wordy/public"));
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());

// connecting to the database
dbURI =
  "mongodb+srv://TestUser:texttext@horjet.xfwyg.mongodb.net/wordy?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(8000, () => {
      console.log("Server is listening at port 8000");
    });
  })
  .catch((error) => console.log(error));

// crud operations
app.use('/posts', postRouter);

// main routers
app.use(mainRouter);