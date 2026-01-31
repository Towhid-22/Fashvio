const nodemailer = require("nodemailer");
async function sendEmail(email, otp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_MAIL_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: process.env.AUTH_EMAIL,
    to: email,
    subject: "Email verication code",
    text: "Hello world",
    html: `<b>Your email verication code is ${otp} </b> <br> <h1>Thanks</h1>`,
  });
}
module.exports = sendEmail;
