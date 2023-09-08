const {mongoose} = require('mongoose');
const {Schema} = mongoose;

const productData = new Schema({
      title: {
        type: String
      },
      description: {
        type: String
      },
      brand: {
        type: String
      },
      condition: {
        type: String
      },
      price: {
        type: Number
      },
      location: {
        type: String
      }
    },
    { timestamps: true }
);

const adsModel = mongoose.model('adsModel', productData);
module.exports = {adsModel};