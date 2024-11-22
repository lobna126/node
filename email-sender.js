var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lobnamansouri91@gmail.com',
    pass: 'qezg yppf xxpd cjgl'
  }
});

var mailOptions = {
  from: 'lobnamansouri91@gmail.com',
  to: 'hellmi.khiari@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});