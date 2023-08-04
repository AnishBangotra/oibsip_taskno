import jwt from 'jsonwebtoken';

export const sendCookie = (user, res, message, statusCode) => {
    const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);
    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 1000*60*15,
        sameSite: "none",
        secure: true,
    }).json({
        success: true,
        message,
    }) 
};