import mongoose from "mongoose";

const connectDb = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected Successfully");  
    }
    catch(error){
        console.log("DB error");
    }
}
export default connectDb 