const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.PASSWORD,
  },
});

exports.sendMail = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  await transporter.sendMail({
    from: email,
    to: process.env.GMAIL_USER,
    sender: `${name}`,
    subject: "Work Mail",
    text: `Name: ${name}, Email: ${email}, Phone Number: ${phone}, Service : ${service}, Message: ${message}`,
    html: `<h1>Name: ${name}, Email: ${email}, Phone Number: ${phone}, Service : ${service}, Message: ${message}</h1>`,
  });

  res.send("Email Sent");
};
