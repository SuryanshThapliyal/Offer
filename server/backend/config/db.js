import mongoose from "mongoose";

export const connectDB = async () => {
    try {
    await mongoose.connect("mongodb://localhost:27017/offer");
    console.log("Connected to MongoDB");
    } catch (error) {
    console.error("DB Connection Failed:", error.message);
    process.exit(1);
    }
};
    