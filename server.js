import mongoose from "mongoose"
import app from "./app.js"
import "dotenv/config.js"

const PORT = process.env.PORT || 5000

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    console.log("DB connected!")
  } catch (e) {
    console.error("DB connect failed:", e.message)
  }

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
}

start()

