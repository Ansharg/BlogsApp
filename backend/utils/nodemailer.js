const nodemailer = require('nodemailer');

module.exports.SendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USERNAME,
                pass: process.env.PASSWORD,
            },
            authMethod: "PLAIN"
        });
        if (subject === "Password reset") {
            await transporter.sendMail({
                from: process.env.USERNAME,
                to: email,
                subject: subject,
                html: `<p>Hi User,</p>
                <p>We received a request to reset your password for your account on [Your Company Name].</p>
                <p>**If you requested this password reset:**</p>
                <p>A one-time password (OTP) has been sent to your email address. Please enter the OTP in the designated field on the password reset page: ${text}</p>
                <p>**Here's the OTP:** <b>[OTP]</b> (**Please note:** This OTP will only be valid for [number] minutes.)</p>
                <p>**If you did not request this password reset:**</p>
                <p>Please disregard this email. Your account remains secure. However, for your security, we recommend that you change your password immediately. You can do this by logging in to your account and going to your profile settings.</p>
                <p>**If you have any trouble resetting your password, please contact our support team at:**</p>
                <p>Sincerely,</p>
                <p>The [Your Company Name] Team</p>`
            })
        }
        else{
            await transporter.sendMail({
                from: process.env.USERNAME,
                to: email,
                subject: subject,
                html: `<p>Hi Author,</p>
                <p>Thank you for submitting your blog post to [Your Platform Name]. We appreciate you considering us as a platform for your content.</p>
                <p>Our team is currently reviewing your blog post to ensure it aligns with our editorial guidelines and provides value to our audience. We'll typically respond within [Number] business days to let you know about the decision.</p>
                <p>In the meantime, here's what to expect:</p>
                <ul>
                  <li>**Approval:** If your blog is approved, we'll send you a follow-up email with the estimated publication date.</li>
                  <li>**Revisions Requested:**  In some cases, we may request minor revisions to ensure your blog aligns perfectly with our platform. We'll provide specific feedback and next steps in this scenario. </li>
                  <li>**Not Approved:** If your blog doesn't meet our current needs, we'll send you a polite email explaining the decision. </li>
                </ul>
                <p>We look forward to sharing your content with our audience!</p>
                <p>If you have any questions in the meantime, please don't hesitate to reply to this email.</p>
                <p>Best regards,</p>
                <p>The [Your Platform Name] Team</p>`
            })
        }
    } catch (error) {
        console.log("email not sent");
        console.log(error);
    }
}