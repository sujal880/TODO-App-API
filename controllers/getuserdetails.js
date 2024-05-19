const UserModel=require('../models/usermodel');
const getuser=async(req,res)=>{
    const response=await UserModel.find();
    res.status(200).json({
        status:200,
        data:response
    });
}

module.exports=getuser;