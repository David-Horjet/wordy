// get_new_post_form, publish_new_post, get_single_post, get_update_post_form, update_single_post, delete_single_post.
const { posts } = require('../models/post');

const get_new_post_form = (req, res) => {
     res.render('new_post');
}

const publish_new_post = async (req, res) => {

     try {
          const post = new posts(req.body);
          post.save(function () {});
          res.redirect('/');
     } catch (error) {
          console.log(error);
     }
}

const get_single_post = (req, res) => {
     const id = req.params.id;
     posts.findById(id)
          .then((result) => {
               res.render('post', {
                    post: result
               })
          })
          .catch((error) => {
               console.log(error);
          })
}

const get_update_post_form = (req, res) => {
     const id = req.params.id;
     posts.findById(id)
          .then((result) => {
               res.render('update_post', {
                    post: result
               })
          })
          .catch((error) => {
               console.log(error);
          })
}

const update_single_post = (req, res) => {
     const id = req.params.id;
     posts.findByIdAndUpdate(id, req.body)
          .then((result) => {
               res.redirect("/")
          })
          .catch((error) => {
               console.log(error);
          })
}

const delete_single_post = (req, res) => {
     const id = req.params.id;
     posts.findByIdAndDelete(id)
          .then((result) => {
               res.json({
                    status: true,
                    message: 'Post deleted successfully',
                    redirect: '/',
               })
          })
          .catch((error) => {
               res.status(400).json({
                    status: false,
                    message: 'Something went wrong',
                    full_error: error,
               })
          })
}

module.exports = {
     get_new_post_form,
     publish_new_post,
     get_single_post,
     get_update_post_form,
     update_single_post,
     delete_single_post
}