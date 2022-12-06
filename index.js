import express from "express";
import cors from "cors"


const app = express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 8001


app.get("/api/user", (req, res) => {
  res.json(req.body)
})

app.post('/api/addpost', (req, res) => {
  res.json(req.body)
})

app.post("/api/user", (req, res) => {
  res.json(req.body)
})

app.listen(PORT, () => console.log(`Your Server Runing at localhost:${PORT}`))