import { userModel } from "../../db/user.models.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const createUser= async (req, res) => {
    let user= req.body;
    try{
        let newUser= await userModel.create(user);
        res.json({message: 'Done', newUser})
    }catch(err){
        res.json({message: err.message});
    }
}
 
export const editInfo= async (req, res) => {
    let {id}= req.params;
    let {firstName}= req.body;
    let updated= await userModel.findByIdAndUpdate(id, {firstName}, {new: true});
    res.json({message: "updated successfully", updated});
};



export const login= async(req,res) => {
    let {email, password}= req.body;
    if(!email || !password){
        return res.json({message: "you must provide email and password"});
    }
    let user= await userModel.findOne({email: email});
    if(!user){
        return res.json({message: "invalid email"});
    }
    let isvalid= await bcrypt.compare(password, user.password);
    if(!isvalid){
        return res.json({message: "invalid password"})
    }
    let token= await jwt.sign({data: {email: user.email, id: user.id, role: user.role}}, process.env.jwt_secret, { expiresIn: '24h' });
    res.json({message: "token success", token: token});
};
