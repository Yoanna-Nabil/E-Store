import { productModel } from "../../db/product.models.js";
import { sellerModel } from "../../db/seller.models.js"


export const newSeller= async (req, res) => {
    let dataSeller= req.body;
    let createSeller= await sellerModel.create(dataSeller);
    res.json({message: "Added Success", createSeller});
};

export const getProduct= async (req, res) => {
    let {id}= req.params;
    try{
        let getProduct= await productModel.findOne({sellerId: id});
        res.json({message: "get it", getProduct});  
    }catch(err){
        res.json({message: err.message});
    }
      
};

export const createProduct= async (req, res) => {
    let newProduct= req.body;
    let createProduct= await productModel.create(newProduct);
    res.json({message: "Created Success", createProduct});
};

export const updateProduct= async (req, res) => {
    let {id}= req.params;
    let {name}= req.body;
    let updateProduct= await productModel.findByIdAndUpdate(id, {name}, {new: true});
    res.json({message: "Updated Successfully", updateProduct});
};

export const deleteProduct= async (req, res) => {
    let {id}= req.params;
    let deleteProduct= await productModel.findByIdAndDelete(id);
    if(deleteProduct){
        res.json({message: "Deleted"});
    }else{
      res.json({message: "Product Not Founded to Deleted"});
    }
}