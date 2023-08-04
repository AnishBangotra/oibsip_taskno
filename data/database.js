import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendApi",
})
.then(()=> console.log("Database connection established"))
.catch((err) => console.error(err));
};