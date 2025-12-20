const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/",async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    } catch(err){
        res.status(500).json({error:err.message});
    }
});

router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findByID(req.params.id);
        if (!user){
            return res.status(404).json({message:"user not found"});
        }
        res.status(200).json(user);
    } catch(err){
        res.status(400).json({error:"Invalid ID"});
    }
});

router.post("/",async(req,res)=>{
    try{
        const {name,age}= req.body;

        const newUser = new User ({name,age});
        const savedUser= await newUser.save();

        res.status(201).json({
            status:"User created",
            user:savedUser
        });
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

module.exports = router;