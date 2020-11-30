const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const sellerSchema = Schema({
    firstName: {
        type: String, 
        required: true
    }, 
    lastName: {
        type: String, 
        required: true
    }, 
    companyName: {
        type: String, 
        required: true
    }, 
    siren: {
        type: Number, 
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    products_id: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Product', 
            required: true
        }
    ], 
    orders_id: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Order', 
            required: true
        }
    ]
    
})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Seller', sellerSchema);