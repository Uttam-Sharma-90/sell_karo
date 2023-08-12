const{userTable} = require('../../../../../modules/database/models/userSchema');
const { use } = require('../../../routes/logins');
const{isEmpty} = require('../../../../utility/common')

const userlogin = async (req,res) => {
    const{email_id} = req.body;
    const isFound = await userTable.findOne({email_id:email_id});
    if(isEmpty(isFound)){
        console.log('user', isFound);
        res.status(401).send({message:'Already Exist', data:''});
    }
    else{
        const result = userTable.create(req.body);
        res.send({message: 'User created secessfully.', data: ''});
    }
}

module.exports = {userlogin};