import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: String,
    foundingYear: Number,
    headquarters: String,
    revenue: Number,
    products: [String],


});
export default mongoose.model("Brand", brandSchema);