import mongoose from "mongoose";
import app from "../app.js";
import "dotenv/config.js";

let conn = null;

async function connectDB() {
  if (conn) return conn;
  conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
  console.log("DB connected!");
  return conn;
}

export default async function handler(req, res) {
  try {
    // Connect to database
    await connectDB();
    
    // Handle the request through Express app
    return new Promise((resolve, reject) => {
      app(req, res, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ 
      error: "Internal server error",
      message: error.message 
    });
  }
}
