import { orderModel } from "../../db/order.models.js";


export const makeOrder= async (req, res) => {
    let addOrder= req.body;
    addOrder.userId= req.newId;
    let orderAdd= await orderModel.create(addOrder);
    res.json({message: "Ordered Made", orderAdd});
};

