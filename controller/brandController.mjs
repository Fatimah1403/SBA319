import Brand from "../models/brand.mjs";

// import Brand from "./brand.mjs";

// Create a new brand
const createBrand = async (brandData) => {
    try {
        const newBrand = new Brand(brandData);
        console.log("New Brand Object:", newBrand);
        const savedBrand = await newBrand.save();
        console.log("Saved Brand:", savedBrand);
        return savedBrand;
    } catch (error) {
        throw error;
    }
};
// Get all brands
const getAllBrands = async () => {
    try {
        const brands = await Brand.find({});
        return brands;
    } catch (error) {
        throw error;
    }
};

// Update a brand by ID
const updateBrandById = async (brandId, updateData) => {
    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            brandId,
            { $set: updateData },
            { new: true }
        );
        return updatedBrand;
    } catch (error) {
        throw error;
    }
};

// Delete a brand by ID
const deleteBrandById = async (brandId) => {
    try {
        const deletedBrand = await Brand.findByIdAndDelete(brandId);
        return deletedBrand;
    } catch (error) {
        throw error;
    }
};

export { createBrand, getAllBrands, updateBrandById, deleteBrandById };

