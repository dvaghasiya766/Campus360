import express from "express";
import dotenv from "dotenv";
import uploadImageRoute from "./routes/uploadImage.route";

dotenv.config();
const app = express();

// Routes
app.use("/api", uploadImageRoute);

export default app;
