require("dotenv").config()
const express = require('express');
const app = express();
const connectDB = require("./db/conne")
const cors = require("cors")
const router = require("./routes/router")
const PORT = process.env.PORT || 5000; // You can use any port you prefer

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(express.json());
app.use(cors())
app.use("/api/v1", router);

connectDB().then(() => {
  app.listen(PORT, () => {
       console.log("Server is runing on port no is ", PORT)
   })
})