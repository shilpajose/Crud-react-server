
const users = require('../Models/userModel')
const admins = require('../Models/adminModel')
const jwt = require('jsonwebtoken')

// admin login
exports.adminLogin = async (req,res)=>{
    // get email and pwd from req
    const {email,password}=req.body
    console.log(email,password);
    try{
        const existingUser = await admins.findOne({email,password})
        if(existingUser){
            // Admin can login
            res.status(200).json({existingUser})
        }else{
            res.status(404).json("Invalid login credentials")
        }

    }catch(err){
        res.status(401).json(err)
    }
}

// user register
exports.userRegister = async(req,res)=>{
    const {username,email,password} = req.body
    try{
        const user = await users.findOne({email})
        if(user){
            res.status(406).json(`User already exists`);
        }else{
            const newuser = new users({
                username,email,password
            })
            newuser.save()
            res.status(200).json(newuser)
        }
    }
    catch(err){
        res.status(401).json(err)
    }
}

// user Login
exports.userLogin = async (req,res)=>{
    // get email and pwd from req
    const {email,password}=req.body
    console.log(email,password);
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            // Admin can login
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({existingUser,token})
        }else{
            res.status(404).json("Invalid login credentials")
        }

    }catch(err){
        res.status(401).json(err)
    }
}

// all users  
exports.allUsers = async (req, res) => {
    try {
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// delete user
exports.deleteUser = async (req,res)=>{
    const {_id:_id} = req.params
    try{
        const userDelete = await users.findByIdAndDelete({_id:_id})
        res.status(200).json(userDelete)
    }
    catch(err){
      res.status(401).json(err)
    }
}

