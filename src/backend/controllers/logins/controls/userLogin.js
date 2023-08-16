const{userTable} = require('../../../../../modules/database/models/userSchema');
const { use } = require('../../../routes/logins');
const{isEmpty} = require('../../../../utility/common');
const {OTP} = require('./otp');
const bcrypt = require('bcrypt');
const{sendEmail} = require('../../../../utility/emailTemplate');

const userlogin = async (req,res) => {
    const{email_id} = req.body;
    const isFound = await userTable.findOne({email_id:email_id});
    if(isEmpty(isFound)){
        console.log('user', isFound);
        res.status(401).send({message:'Already Exist', data:''});
    }
    const match = await bcrypt.compare(req.body.password, isFound.password);
    if(!match){
        res.status(401).send({message:'Invalid Password', data:''});
    }
    else{
        const loginOtp = await OTP();
        console.log('otp', loginOtp);
        
        const loginUdates = {loginOTP : loginOtp};
        await userTable.updateOne({email_id:email_id}, loginUdates);

        const to = req.body.email_id;
        const subject = "Verify Otp";
        const html = `<div><p> Please verify your account using your Email and Otp ${loginOtp}</p></div>`
        sendEmail(to, subject, html);  
        res.status(200).send({message: 'Please verify OTP.', data: ''});
    }
}

module.exports = {userlogin};