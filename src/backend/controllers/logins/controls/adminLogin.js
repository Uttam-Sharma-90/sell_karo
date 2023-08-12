const { Vonage } = require('@vonage/server-sdk')

const vonage = new Vonage({
  apiKey: "af4bd454",
  apiSecret: "fihV05f3axtnpB20"
})

const adminlogin = (req,res) => {
    
}

const from = "Vonage APIs"
const to = "8356804540"
const text = 'A text message sent using the Vonage SMS API'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();

module.exports = {adminlogin};