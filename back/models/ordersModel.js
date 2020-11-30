const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
    seller_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Seller', 
        required: true
    }, 
    buyer_id: {
            type: Schema.Types.ObjectId, 
            ref: 'User', 
            required: true
    },
    state: {
        type: Number,
        required: true
    }, 
    date: {
        type: Date,
        required: true
    }, 
})

module.exports = mongoose.model('Order', orderSchema);