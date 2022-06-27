const bcrypt = require('bcrypt');

const generatePasswordHash = (password) => {
     return bcrypt.hashSync(password, 10);
}

const validatePassword = (password, hash) => {
     return bcrypt.compareSync(password, hash);
}

module.exports = {
     generatePasswordHash,
     validatePassword,
};