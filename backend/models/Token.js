const mongoose = require('mongoose');

const tokenSchema = mongoose.Schema({
    otp: {type: String, required: true},
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("Token", tokenSchema);