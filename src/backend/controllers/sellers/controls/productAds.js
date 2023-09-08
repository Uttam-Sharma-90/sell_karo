const {adsModel} = require('../../../../../modules/database/models/adSchema');
const asyncHandler = require('express-async-handler');

const postAds = async (req,res) => {
    const{title, description, brand, condition, price, location} = req.body;
    try{
        if(!title || !description|| !brand|| !condition|| !price|| !location){
            res.send({message:'All field are required.', data : ''});
        }
        // if(!image) res.send({message:'At least one image is required.', data : ''});
        else{
            const product = new adsModel({
                title, description, brand, condition, price, location
            })
            await product.save();
            res.status(400).send({message : 'product saved sucessfully.'})
        }

    }catch(error){
        if(error) console.log('product saving error :', error);
    }

}
module.exports = {postAds}