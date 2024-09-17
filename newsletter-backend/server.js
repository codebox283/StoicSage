const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Enable CORS for all origins
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    // Save email address to database or file (for simplicity, we'll use a variable)
    // Replace this with your database or file storage logic
    const savedEmail = saveEmail(email);

    // Send welcome email
    sendWelcomeEmail(email);

    res.status(200).json({ message: 'Email saved and welcome email sent successfully' });
});

// Function to save email (replace with your actual saving logic)
function saveEmail(email) {
    // For demo purposes, just log the email
    console.log(`Email saved: ${email}`);
    return email;
}

// Function to send welcome email
function sendWelcomeEmail(email) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to Our Newsletter!',
        text: 'Thank you for subscribing to our newsletter. We look forward to keeping you updated!'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
