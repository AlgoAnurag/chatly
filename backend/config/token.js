import jwt from "jsonwebtoken"
const genToken = async (useId)=>{
    try{
        const token = await jwt.sign({useId}, process.env.JWT_SECRET,{expiresIn:"5d"})
        return token
    }
    catch(error){
        console.log("gen token error");
    }
}
export default genToken