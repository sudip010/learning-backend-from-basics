const User = require("../models/user.model.js")
exports.getAllUsers = async (req,res) => {
    try{
        const user = await User.find().select("-password");

        return res.status(200).json(user)
    }
    catch (error){
        return res.status(500).json({message:"Server error"});
    }
}
exports.getProfile = async (req,res) =>{
    try{
        const user = await User.findById(req.user.id).select("-password");

        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).json({message:"Server error"});
    }
}
exports.deleteUser = async (req,res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if(!deletedUser){
            return res.status(404).json({message:"User not found"});
        }

        return res.status(200).json({message:"User deleted"});
    }
    catch(error){
        return res.status(500).json({message:"Server error"});
    }
}