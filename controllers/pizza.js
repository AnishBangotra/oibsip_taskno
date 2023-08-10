import ErrorHandler from "../middlewares/error.js";
import { Pizza } from "../models/pizza.js";

export const addPizza = async (req, res) => {
    const { title, description, type, base, sauce, extraCheese, veggies, price, quantity } = req.body; 
    await Pizza.create({
        title,
        description,
        type, 
        base, 
        sauce, 
        extraCheese, 
        veggies,  
        price, 
        quantity,
        user: req.user,
    });
    res.status(201).json({
        success: true,
        message: "Pizza created successfully",
    })
};

export const getPizza = async (req, res) => {
    const user_id = req.user._id;
    const pizzas = await Pizza.find({ user: user_id });
    res.status(200).json({
        success: true,
        pizzas,
    });
};

export const getAllPizzas = async (req, res) => {
    const pizzas = await Pizza.find();
    res.status(200).json({
        success: true,
        data: pizzas
    });
};

// export const updatePizza  = async (req, res) => {
//     const { id } = req.params;
//     const pizza = await Pizza.findById(id);
//     pizza.u

// };

export const deletePizza = async (req, res, next) => {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) return next(new Error("Invalid Pizza"));
    await pizza.deleteOne();
    res.status(200).json({
        success: true,
        message: "Pizza deleted successfully",
    });
};
