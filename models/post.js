const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    snippet: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});

const posts = mongoose.model('post', postSchema);

module.exports = {
    posts
};