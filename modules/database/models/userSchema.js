const{mongoose} = require('mongoose');
const {Schema} = mongoose;

const userData = new Schema({
    email_id : {
        type : String
    },
    password : {
        type : String
    },
    loginOTP : {
        type: String
    },
    login_expiry : {
        type: String
    }
})

const userTable = mongoose.model('userTable', userData);
module.exports = {userTable};