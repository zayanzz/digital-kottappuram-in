var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer'); // Add this line to import nodemailer

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


// Handle form submission
router.post('/', (req, res) => {
  const { name,Mobile, email, message } = req.body;
console.log(req.body);
  // Configure Nodemailer to send emails using your Gmail account
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'zayanolakara127@gmail.com', // Your Gmail email address
      pass: 'cxsy ezjp apvw ilkl' // Your Gmail password (make sure to keep it secure)
    }
  });


  const mailOptions = {
    from: 'zayanolakara127@gmail.com',
    to: 'zayanolakara127@gmail.com', // The email address where you want to receive submissions
    subject: `New Contact Form Submission from ${name}`,
    text: JSON.stringify({ name,Mobile, email, message }),
  };

  console.log("menss",mailOptions.text);

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.render('index', { message: 'Error sending the email.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.render('index', { message: 'Email sent successfully.' });
    }
  });
});


module.exports = router;
