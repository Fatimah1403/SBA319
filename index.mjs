import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
// const bodyParser = require('body-parser');
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const port = 3000;

// import Brand from "./models/brand.mjs";
// import Review from "./models/review.mjs";
// import Device from "./models/device.mjs";

//import the routes.
import brandRoutes from "./routes/brandRoutes.mjs"


//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'views')))
app.use(express.json())

app.use("/", brandRoutes);

const connectDb = async () => {
    mongoose.connect(process.env.ATLAS_URI);

   await mongoose.connection
    .on("open", ()=> console.log("Connected to the Database"))
    .on("close", ()=> console.log("Disonnected from the Database"))
    .on("error", (error)=> console.log(error));

}
connectDb();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

 // Global error handling
app.use((err, _req, res, next) => {
res.status(500).send("Seems like we messed up somewhere...");
});

app.listen(port, ()=> {
    console.log(`Server is listening on port: ${port}`);
});