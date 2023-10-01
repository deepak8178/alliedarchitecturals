const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "alliedarchitecturals@gmail.com",
    pass: "zzti mgob iqyv ljwy",
  },
});

exports.sendMail = async (req, res) => {
  try {
    const { inputName, inputEmail, inputPhone, inputService, inputMessage } =
      req.body;
    console.log(req.body, "from send email controller");

    await transporter.sendMail({
      from: inputEmail,
      to: "alliedarchitecturals@gmail.com",
      sender: `${inputName}`,
      subject: "Work Mail",
      text: `Name: ${inputName}, Email: ${inputEmail}, Phone Number: ${inputPhone}, Service : ${inputService}, Message: ${inputMessage}`,
      html: `<h1>Name: ${inputName}, Email: ${inputEmail}, Phone Number: ${inputPhone}, Service : ${inputService}, Message: ${inputMessage}</h1>`,
    });

    res.status(201).send("Email Sent");
  } catch (e) {
    console.log(e);
  }
};
