const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);

app.get("/",(req,res)=>{
    res.send("Welcome to mongoDB REST API");
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on http://localhost:${process.env.PORT} `);
    });
})
.catch(err => console.log(err));