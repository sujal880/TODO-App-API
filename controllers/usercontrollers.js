const UserModel=require('../models/usermodel');

const registeruser=async(req,res)=>{
    try{
        const data=req.body;
        const mdata=new UserModel(data);
        const response=await mdata.save();
        res.status(200).json({
            message:"Sign Up SuccessFully",
            data:response
        })
    }
    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports=registeruser;