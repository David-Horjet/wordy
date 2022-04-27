const mongoose = require('mongoose');
const {
     Schema
} = mongoose;

const userSchema = new Schema({
     firstName: {
          type: String,
          required: true,
     },
     lastName: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
     },
     password: {
          type: String,
          required: true,
     },
     phone: String,
     about: String,

}, {
     timestamps: true
});

const User = mongoose.model('User', postSchema);

module.exports = {
     User
};