import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    role: {
        type: Boolean,
        default: false,
    },
    address: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

export const User = mongoose.model("User", schema);
