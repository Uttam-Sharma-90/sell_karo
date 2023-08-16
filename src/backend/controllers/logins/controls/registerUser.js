const{userTable} = require('../../../../../modules/database/models/userSchema');
const { isEmpty } = require('../../../../utility/common');
const bcrypt = require('bcrypt');
const{sendEmail} = require('../../../../utility/emailTemplate');

const register = async (req,res) => {
    const{email_id, password} = req.body;
    const isExist = await userTable.find({email_id:email_id});
    console.log('found: ', isExist);
    if(isExist.length > 0){
        res.status(401).send({message: 'user already exist', data: ''});
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashedPassword;

        const to = req.body.email_id;
        const subject = "Congratulation you have registered sucessfully.";
        const html = `<div><p> Please verify your account using your Email and OTP.</p></div>`
        sendEmail(to, subject, html);  

        const saved = await userTable.create(req.body);
        res.status(200).send({message: 'registered successfully', data: saved});
        
    }
}

module.exports = {register}