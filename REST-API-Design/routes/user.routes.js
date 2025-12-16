const express = require("express");
const router = express.Router();

const users = [
    {id:1,name:"sudip",age:20},
    {id:2,name:"alex",age:25},
    {id:3,name:"john",age:26}
];

router.get("/users",(req,res)=>{
    res.status(200).json(users);
});

router.get("/users/:id",(req,res)=>{
    const user = users.find(u => u.id == req.params.id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    res.status(200).json(user);
});

router.post("/users",(req,res)=>{
    const {name,age}= req.body;
    if(!name || !age){
        return res.status(400).json({message:"name and age required"});
    }
    const newUser ={
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json({
        status:"user created",
        user: newUser
    });
});

module.exports = router;