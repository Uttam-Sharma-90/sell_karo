
const{TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN} = process.env;
// const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

/**
 * send OTP
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const sendOTP = async (req,res,next) => { 
    const{countryCode, phoneNumber} = req.body;
    try{
        const otpResponse = await client.messages
            // .v2.services(TWILIO_SERVICE_SID)
            .create({
                to : `+${countryCode}${phoneNumber}`,
                from : `8356804540`,
                body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                channel: "sms"
            });
            res.status(200).send({message:'OTP send successfully!', data: ''});
    }catch(error){
        res.status(error?.status || 400).send(error?.message || 'something went wrong.')
    }
}

module.exports = {sendOTP}