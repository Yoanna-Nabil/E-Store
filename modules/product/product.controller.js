import { productModel } from "../../db/product.models.js";


export const newProduct= async (req, res) => {
    let dataProduct= req.body;
    dataProduct.userId= req.newId;
    let createProduct= await productModel.create(dataProduct);
    res.json({message: "Added Success", createProduct});
};

export const getUserSearch= async (req, res) => {
    let {name}= req.body;
    try{
    let foundedProduct= await productModel.findOne(name);
    if(foundedProduct){
        res.json({message: "founded it", foundedProduct});
    }else{
        res.json({message: "Not founded product"});
    }}
    catch(err){
        res.json({message: err.message});
    }
};

export const getProduct= async (req, res) => {
    let foundProduct= await productModel.find();
    res.json({message: "Done", foundProduct});
};

