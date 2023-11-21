import express from "express";
import mongoose from "mongoose";
import Brand from "../models/brand.mjs"
import { ObjectId } from "mongodb"

const router = express.Router();


// Getting all
router.get("/brands", async (req, res) => {
    const brands = await Brand.find({});
    res.render("index", { brands });
});

export default router;