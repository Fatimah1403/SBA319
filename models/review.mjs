import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    
    rating: {
        type: Number,
        required: true
    },

    device: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Device",
        required: true
    },
});

export default mongoose.model("Review", reviewSchema);
