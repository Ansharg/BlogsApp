const otpGenerator = require('otp-generator')

module.exports.otp = () => {
    try {
        const token = otpGenerator.generate(4,{ 
            digits: true,
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false 
        });  
        return token;
    } catch (error) {
        console.log(error);
        return error.message;
    }
}
