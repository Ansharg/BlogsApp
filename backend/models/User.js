const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now()},
    is_verify: {type: Boolean, default: false},
    role: {type:String,
        enum: ["user","admin"],
        default: "user"},
    blogs: [{
        type: mongoose.Types.ObjectId, 
        ref: "Blog"
    }]
});

module.exports = mongoose.model("User", userSchema);