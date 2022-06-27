const {
     User
} = require('../models/user');
const {
     upload
} = require('../middlewares/upload');

const storage = upload.single('image');

// const profile = async (req, res) => {
//      const data = await User.findOne({
//           _id: req.session.user_id
//      });
//      console.log(data);
//      if (data) {
//           res.render('profile.ejs', {
//                'name': data.firstName,
//                'lname': data.lastName,
//                'email': data.email,
//                'occupation': data.occupation,
//                'about': data.about,
//                'phone': data.phone
//           });
//           req.flash('success', 'You have successfully logged in');
//      } else {
//           res.redirect('/auth/login');
//           // something went wrong
//           req.flash('error', 'You are trying to intrude without sigin in, Abeg go sigin');
//      }
// };

const profile = async (req, res) => {

     return res.render('profile');

};

const logout = (req, res) => {

     return req.session.destroy(() => {
          res.redirect('/auth/login');
          req.flash('success', 'You have successfully logged out');
     });

}

const updateProfile = async (req, res) => {
     storage(req, res, async (error) => {
          console.log(req.file);

          if (error) {
               req.flash('error', error.message);
               return res.status(400).redirect(`/user/profile/${req.user._id}`);
          }

          const body = req.body;

          if (req.file) {
               body.image = req.file.path;
          }

          if (!body.firstName && !body.lastName && !body.email && !body.phone && !body.about) {
               // sending an error message
               req.flash('error', 'Update information required');
               return res.status(200).redirect(`/user/profile/${req.user._id}`);
          }

          // updating the user

          if (body.email) {
               // checking email duplicate
               const duplicate = await User.findOne({
                    email: body.email.toLowerCase()
               });
               if (duplicate && duplicate._id.toString() !== req.user._id.toString()) {
                    req.flash('error', 'That email is already in use');
                    return res.status(400).redirect(`/user/profile/${req.user._id}`);
               }
          }

          const user = await User.findByIdAndUpdate(req.user._id, body, {
               new: true
          });

          req.session.user = user;

          // sending a success message
          req.flash('success', 'Profile update successful');
          return res.status(200).redirect(`/user/profile/${req.user._id}`);
     })
}

module.exports = {
     profile,
     logout,
     updateProfile
}