const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));

app.get("/",(req,res)=>{
    res.send("Authentication API with jwt");
});

app.listen(process.env.PORT,()=>{
    console.log("server running on http://localhost:"+process.env.PORT);
});