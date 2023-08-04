import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
        unique: true,
    },
    ordered: {
        type: Boolean,
        default: false,
    },
    base: {
        type: Array,
        required: true,
    },
    sauce: {
        type: Array,
        length: 5,
        required: true,
    },
    extraChesse: {
        type: Boolean,
        default: false,
    },
    veggies: {
        type: Array,
        length: 5,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: String,
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Pizza = mongoose.model('Pizza', schema);