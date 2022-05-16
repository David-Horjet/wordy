const { User } = require('../models/user');

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
          req.flash('success', 'You have successfully login');
     } else {
          res.redirect('/');
     }
};

module.exports = {
     profile
}