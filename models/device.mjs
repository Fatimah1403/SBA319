import mongoose from "mongoose";
// const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
        required: true
    },

    specifications: {
        display: String,
        camera: String,
        processor: String,
        storage: String,
        memory: String,
        battery: String,
        operatingSystem: String,
    },
    price: {
        type: Number, 
        default: 0
    },
    availability: {
        type: Boolean,
        default: true
    },

});

export default mongoose.model("Device", deviceSchema);