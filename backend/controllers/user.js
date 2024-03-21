const User = require('../models/User')
const Token = require('../models/Token')
const {otp} = require('../utils/otpgenerator')
const {SendEmail} = require('../utils/nodemailer');
const bcrypt = require('bcrypt')
const saltrounds = 10

module.exports.getUser = async (req,res) => {
    try {
        const id = req.session.user._id;
        const user = await User.findOne({_id: id});
        if(!user){
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json({ user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.createUser = async (req,res) => {
    try {
        const {first,last,username,email,password,timeStamp} = req.body;
        if(!first || !last){
            return res.status(400).json({
                message: "User not entered first or last name"
            });
        }
        if(!username || !email){
            return res.status(400).json({
                message: "User not entered username or email"
            });
        }
        const user = await User.findOne({ email: email})
        if(user){
            return res.status(400).json({message: "User exists already"})
        }
        if(!password){
            return res.status(400).json({
                message: "User not entered password"
            });
        }
        bcrypt.hash(password, saltrounds,async(err, hash)=>{
            const user = await User.create({
                firstName: first,
                lastName: last,
                username: username,
                email: email,
                password: hash,
                timeStamp: timeStamp
            });
        });
        res.status(200).json({message : " User registered successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.forgotPassword = async (req,res) => {
    try {
        const {email} = req.body;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        const token = otp();
        SendEmail(email, "Reset Your Password for [Your Company Name]", token)
        bcrypt.hash(token, saltrounds, async(err,hash)=>{
            const token = await Token.create({
                otp: hash,
                user: user._id,
            })
        })
        res.status(200).json({message: "OTP sent on registered mail"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.Login = async (req,res) => {
    try {
        if (req.session.user) {
            return res.status(400).json({message: "User already logged in"});
        }
        const {email,password} = req.body;
        if(!email){
            return res.status(400).json({message: "Please enter your email"});
        }
        if(!password){
            return res.status(400).json({message: "Please enter your password"});
        }
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: "User not found"})
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                req.session.user = user;
                req.session.isLoggedIn = true;
                return res.status(200).json({message: "User login successful",data: user});
            }
            else{
                return res.status(401).json({message: "Password invalid"})
            }
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.logOut = async (req,res) => {
    try {
        if (req.session.isLoggedIn === false) {
            return res.status(403).json({message: "User already logged out"});
        }
        req.session.user = null;
        req.session.isLoggedIn = false;
        res.status(200).json({message: "Logout successful"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}