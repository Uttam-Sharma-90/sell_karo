const mongoose = require('mongoose');


const connnectionUrl = `mongodb://localhost:27017/shopping_app`;
const connectionOptions = {
    autoIndex: false,
    maxPoolSize: 10,
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    retryWrites: false
};


mongoose.connect(connnectionUrl, connectionOptions).then(()=>{
    console.log(`*** connection Establish ***`);
}).catch((e)=>{
    console.log(`*** connection error ***`);
});

module.exports = {mongoose};