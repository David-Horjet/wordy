const {
     User
} = require('../models/user');

loginRequired = async (req, res, next) => {
     if (req.session && req.session.user) {
          // find the user
          const user = await User.findById(req.session.user._id);
          if (!user) {
               // if user not found
               req.flash('error', 'You need to sign in');
               return res.redirect('/auth/login');
          }
          // If user found
          req.user = user;
          return next();
     }
     // if no user in session
     req.flash('error', 'You need to sign in');
     return res.redirect('/auth/login');
}


logoutRequired = (req, res, next) => {
     if (req.session && req.session.user) {
          return res.redirect(`/user/profile/${req.session.user}`);
     }
     // if not user in session
     return next();
}

module.exports = {
     loginRequired,
     logoutRequired
}