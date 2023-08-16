const nodemailer = require('nodemailer');

const sendEmail = async (to,subject,html) => {
    const mailTransporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user : "sharmauttam1903@gmail.com",
            pass : "lqibasuhlxcggwrf"
        }
    })
    
    const mailOptions = {
        from:'sharmauttam1903@gmail.com',
        to:to,
        subject:subject,
        html:html
    }

    mailTransporter.sendMail(mailOptions, (err,info) => {
        if(err) console.log('error',err);
        else{
            console.log('mail send sucessfully.');
        }
    })   
}
module.exports = {sendEmail}