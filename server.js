require("dotenv").config()
const express = require("express")
const cors = require("cors")
const songRoutes = require("./src/routes/song.routes")
const connectToDB = require('./src/db/db')

const app = express()

app.use(express.json())

app.use(cors({
  origin: "*"
}))

app.use("/", songRoutes)

connectToDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log("Server running on", PORT)
})
