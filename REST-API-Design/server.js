const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/user.routes");

app.use("/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("welcome to REST API");
});

app.listen(3000,()=>{
    console.log("REST API server is running on http://localhost:3000");
});