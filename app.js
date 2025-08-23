import express from "express"
import cors from "cors"
import "dotenv/config.js"
import noteRoutes from "./routes/noteRoutes.js"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (_req, res) => res.json({ ok: true }))
app.use("/api", noteRoutes)


export default app
