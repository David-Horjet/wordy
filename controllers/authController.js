const { User } = require('../models/user');
const helpers = require('../utils/auth')

const renderRegisterUser = ((req, res) => {
     return res.render('register');
});

const registerUser = async (req, res) => {
     try {
          const body = req.body;

          if (!body.firstName || !body.lastName || !body.email || !body.password) {
               // sending an error message
               req.flash('error', 'Please provide all necessary information');
               return res.status(400).redirect('/auth/register');
          }
          console.log(body);
          body.password = helpers.generatePasswordHash(body.password);
          body.email = body.email.toLowerCase();

          const isExisting = await User.findOne({ email: body.email });

          if (isExisting) {
               // sending an error message  of email duplicate 
               req.flash('error', 'That email is already in use');

               return res.status(400).redirect('/auth/register');
          }

          await new User(body).save();

          // sending a success message
          req.flash('success', 'Register successful Please login')

          return res.status(201).redirect('/auth/login');
     } catch (error) {
          // sending a failed message
          // something went wrong
          req.flash('error', 'Something went wrong, sending a failed message');
          return res.status(500).redirect('/auth/register');
     }
};

const renderLoginUser = ((req, res) => {
     return res.render('login');
});

const loginUser = ((req, res) => {
     const email = req.body.email;
     const password = req.body.password; 
     
     try {
          
     } catch (error) {
          
     }
});

module.exports = { 
     renderRegisterUser,
     registerUser,
     renderLoginUser,
     loginUser
};