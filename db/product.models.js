import mongoose from 'mongoose';

const productSchema= new mongoose.Schema({
    sellerId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Seller'
    },

    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },

    name:{
        type: String,
        required: true
    },

    description:{
        type: String,
        default: 'It is a good product',
        minLength: 5,
        maxLength: 20,
    },

    photo: {
        type: String,
        required: true,
      },

}, {
    timestamps: true
});


export const productModel= mongoose.model('Product', productSchema);      