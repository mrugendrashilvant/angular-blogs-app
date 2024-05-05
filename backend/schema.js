const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: String,
    blogContent: String,
    hashTags: [String],
    image: String,
    likes: Number,
    created: Date
});

module.exports = mongoose.model('BlogModel', blogSchema);