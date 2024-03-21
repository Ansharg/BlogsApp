const Token = require('../models/Token');
const bcrypt = require('bcrypt')
const {otp} = require('../utils/otpgenerator');
const saltrounds = 10

module.exports.verifyToken = async (req,res) => {
    try {
        const {id} = req.params;
        const {otp} = req.body;
        const token = await Token.findById(id);
        if(!token){
            res.status(400).json({message: "Token Expired"});
        }
        bcrypt.compare(otp, token.otp,async (err,result)=>{
            if(result){
                await findByIdAndDelete(id)
                res.status(200).json({message: "OTP verified successfully"})
            }
            else{
                res.status(500).json({message: "Incorrect OTP"})
            }
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.resendOTP = async (req,res) => {
    try {
        const {id} = req.params;
        const token = await Token.findById(id);
        if (!token) {
            res.status(400).json({message: "Token Expired"});
        }
        const newotp = otp();
        bcrypt.hash(newotp, saltrounds,async (err, hash) => {
            await Token.findByIdAndUpdate(id,{otp: hash})
        })
        res.status(500).json({message: "OTP sent"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}