import express from "express";
import mongoose from "mongoose";
import Brand from "../models/brand.mjs"
import { ObjectId } from "mongodb";

const router = express.Router();
import {
    createBrand,
    getAllBrands,
    updateBrandById,
    deleteBrandById
} from "../controller/brandController.mjs"

// // Getting all
// router.get("/brands", async (req, res) => {
//     const brands = await Brand.find({});
//     res.render("index", { brands });
// });
// Create a new brand
router.post("/brands", async (req, res) => {
    try {
        const brandData = req.body; // Assuming your request body contains the necessary brand data
        const newBrand = await createBrand(brandData);

        res.status(201).json(newBrand);
    } catch (error) {
        console.error("Error creating brand:", error);
        res.status(500).send("Internal Server Error");
    }
});

// GET route to get all brands
router.get("/brands", async (req, res) => {
    try {
        const brands = await getAllBrands();
        res.json(brands);
    } catch (error) {
        console.error("Error getting brands:", error);
        res.status(500).send("Internal Server Error");
    }
});

// PUT route to update a brand by ID
router.put("/brands/:id", async (req, res) => {
    try {
        const updatedBrand = await updateBrandById(req.params.id, req.body);
        res.json(updatedBrand);
    } catch (error) {
        console.error("Error updating brand:", error);
        res.status(500).send("Internal Server Error");
    }
});

// DELETE route to delete a brand by ID
router.delete("/brands/:id", async (req, res) => {
    try {
        const deletedBrand = await deleteBrandById(req.params.id);
        res.json(deletedBrand);
    } catch (error) {
        console.error("Error deleting brand:", error);
        res.status(500).send("Internal Server Error");
    }
});

export default router;