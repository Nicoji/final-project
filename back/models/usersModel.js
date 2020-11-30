const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = Schema({
    firstName: {
        type: String, 
        required: true, 
    }, 
    lastName: {
        type: String, 
        required: true, 
    }, 
    email: {
        type: String,
        required: true, 
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }, 
    role: {
        type: Number,
        default: 0
    }, 
    favorites: {
        type: Array,
        default: []
    }, 
    orders_id: [
        {
            type: Schema.Types.ObjectId, 
            ref: 'Order', 
            default: []
        }
    ]
    
})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);