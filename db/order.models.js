import mongoose from 'mongoose';

const orderSchema= new mongoose.Schema({
    productId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product'
    },

    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
    
}, {
    timestamps: true
});


export const orderModel= mongoose.model('Order', orderSchema);      