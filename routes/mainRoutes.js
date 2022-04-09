const express = require('express');
const {
     posts
} = require('../models/post');
const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
     posts.find()
          .sort({
               createdAt: -1
          })
          .then((result) => {
               // console.log(result);
               res.render("./home.ejs", {
                    posts: result
               });
          })
          .catch((error) => {
               console.log(error);
          })
});

// about route
mainRouter.get('/about', (req, res) => {
     res.status(404).render('about');
})

// 404 Page
mainRouter.all('*', (req, res) => {
     res.status(404).render('404');
})

// exporting our main router
module.exports = { mainRouter };