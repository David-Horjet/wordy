const {
     User
} = require('../models/user');

const profile = async (req, res) => {
     const data = await User.findOne({
          _id: req.session.user_id
     });
     console.log(data);
     if (data) {
          res.render('profile.ejs', {
               'name': data.firstName,
               'lname': data.lastName,
               'email': data.email,
               'occupation': data.occupation,
               'about': data.about,
               'phone': data.phone
          });
          req.flash('success', 'You have successfully logged in');
     } else {
          res.redirect('/auth/login');
          // something went wrong
          req.flash('error', 'You are trying to intrude without sigin in, Abeg go sigin');
     }
};

const logout = (req, res) => {
     req.session.destroy();
     res.redirect('/auth/login');
     req.flash('success', 'You have successfully logged out');
}

module.exports = {
     profile,
     logout
}