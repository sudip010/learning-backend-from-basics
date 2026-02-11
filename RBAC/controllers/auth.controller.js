const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req, res) => {
    const {name,email,password} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);

    const User = await user.create({
        name,
        email,
        password: hashedPassword
    });
    res.status(201).json({message:"User registered succesfully"});
};

exports.login = async(req,res) => {
    const {email,password} = req.body;

    const User = await user.findOne({email});

    if(!User){
        return res.status(400).json({message:"Invalid Credential"});
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if(!isMatch){
        return res.status(400).json({message:"Invalid Credential"});
    }

    const token = jwt.sign(
        {id: User._id,
            role: User.role
        },
        process.env.JWT_SECRET,
        {expiresIn:"1h"}
    );
    res.json({token});
};