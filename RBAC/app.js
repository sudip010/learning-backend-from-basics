const express = require("express");
const dotenv = require ("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/auth",require("./routes/auth.routes"));
app.use("/api/auth",require("./routes/user.routes"));

app.get("/",(req,res)=>{
   res.send("Authentication API with jwt and RBAC"); 
});

app.listen(process.env.PORT,()=>{
    console.log("server running on http://localhost:"+process.env.PORT);
});