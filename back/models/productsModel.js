const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = Schema({
    name: {
        type: String, 
        required: true
    }, 
    price: {
        type: Number,
        required: true
    }, 
    categories: {
        type: Array,
        required: true
    }, 
    img_url: {
        type: String
    },
    label: {
        type: String
    },
    seller_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Seller', 
        required: true
    }, 
    stock: {
        type: Number,
        required: true
    }, 
    nbr_sells: {
        type: Number,
        default: 0
    },
    review: {
        type: Number
    }, 
    
})

module.exports = mongoose.model('Product', productSchema);