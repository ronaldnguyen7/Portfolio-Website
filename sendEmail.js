const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 


const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;
  
    const mailOptions = {
      from: 'ronaldnguyen55555@gmail.com',
      to,
      subject, 
      text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error.message);
        return res.status(500).send('Error sending email');
      }
      res.status(200).send('Email sent successfully!');
    });
  });
  
// Start the server
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});