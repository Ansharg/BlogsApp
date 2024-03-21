const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
        ref: "User"
    },
    title: {type: String, required: true},
    category: {type: String, required: true},
    content: {type: String, required: true},
    isVerify: {type: Boolean, default: false},
    timeStamp: {type: Date, default: Date.now()},
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
})

module.exports = mongoose.model("Blogs", blogSchema)