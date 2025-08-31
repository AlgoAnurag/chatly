import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signUp =  async(req,res)=>{
    try{
        const {userName,email,password} = req.body
        const checkUserByUserName = await User.findOne({userName})
        if(checkUserByUserName){
            return res.status(400).json({message:"UserName already exist"})
        }

        const checkUserByemail = await User.findOne({email})
        if(checkUserByemail){
            return res.status(400).json({message:"Email already exist"})
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least 6 charcters"})
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            userName,email,password:hashedPassword
        })
    }
    catch(error){

    }
}