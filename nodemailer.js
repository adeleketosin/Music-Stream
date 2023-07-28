const nodemailer = require('nodemailer');
const { artist } = require('./models/databaseSchema');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.gmail,
        pass: process.env.mailPassword,
    }
})

const subject = (artistEmail,subject,message) => {
    const mailOptions={
        from: process.env.gmail, // sender address
        to:`${artistEmail}`,  // list of receivers
        subject: subject,
        text: message // plain text body
    }

transporter.sendMail(mailOptions,(error,info) =>{
    if(error){
        console.log("Error occured", error);
        }else{
            console.log(`Message sent ${info.response}`);
            }
})
}

module.exports = subject