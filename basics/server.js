const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello sudip, express server is running");
});
app.get("/about",(req,res)=>{
    res.send("this is about page");
});
app.get("/user/:name",(req,res)=>{
    res.send('hello ${req.params.name}');
});

app.use(express.json());

app.post("/data",(req,res)=>{
    res.json({
        received:req.body
    });
});

app.listen(3000,()=>{
    console.log("server running at http://localhost:3000");
});
app.use((req, res, next) => {
    console.log("Request received at:", new Date().toLocaleTimeString());
    next();
});

