const bcrypt = require('bcrypt');

const generatePasswordHash = (password) => {
     return bcrypt.hashSync(password, 10);
}

module.exports = {
     generatePasswordHash
};