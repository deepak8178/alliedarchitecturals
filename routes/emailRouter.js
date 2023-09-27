const express = require("express");
const router = express.Router();

const emailController = require("../controllers/emailController");

router.route("/send").post(emailController.sendMail);

module.exports = router;
