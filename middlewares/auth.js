import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(404).json({
        success: true,
        message: "Login First",
    });

    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id)
    next();
};

export const isAdmin = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) return res.status(404).json({
        success: true,
        message: "Login First",
    });
    const decoded = jwt.verify(token , process.env.JWT_SECRET);
    req.user = await User.findById(decoded._id)
    if (req.user.role == true) {next();}
    else {return res.status(404).json({
        success: false,
        message: "You are not an administrator"
    })};
};