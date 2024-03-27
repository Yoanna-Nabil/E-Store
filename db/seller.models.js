import mongoose from 'mongoose';

const sellerSchema= new mongoose.Schema({

    name:{
        type: String,
        required: true
    }

}, {
    timestamps: true
});


export const sellerModel= mongoose.model('Seller', sellerSchema);      