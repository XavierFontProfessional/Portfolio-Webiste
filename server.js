require('dotenv').config()
const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');
const compression = require('compression');
const minifyHTML = require('express-minify-html');

const app = express();

app.use(compression());
app.use(minifyHTML({
    override:      true,
    htmlMinifier: {
        removeComments:            true,
        collapseWhitespace:        true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes:     true,
        removeEmptyAttributes:     true,
        minifyJS:                  true
    }
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'), {
    maxAge: '1y'
}));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/answer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.NOTIFIER_USER,
        pass: process.env.NOTIFIER_PASSWORD
    }
});
app.post('/making_call', (req, res) => {
    const id = req.body.id;
    // Use the id in your logic
    console.log(`https://www.xavierfont.com/answer?id=${id}`);

    // Define the email options
    const mailOptions = {
        from: 'xnotifier2023@outlook.com',
        to: process.env.PERSONAL_EMAIL,
        subject: 'Instant Call From Portfolio Website',
        text: `Someone is trying to reach you from your portfolio website, click on the following link to join the call https://www.xavierfont.com/answer?id=${id}`
    };

// Send the email
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
    // ...
    res.json({ message: 'ID received', id });
});

// HTTPS server
const httpsOptions = {
    key: fs.readFileSync('cloudflare.key'),
    cert: fs.readFileSync('cloudflare.crt')
};

const httpsServer = https.createServer(httpsOptions, app);
httpsServer.listen(443, () => {
    console.log('HTTPS Server running on port 443');
});

// HTTP Server
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
    console.log('HTTP Server running on port 80');
});
