const express=require('express');
const userRoutes=require('./routes/userroutes');
require('./config/db');
const allroutes=express.Router();

allroutes.use('/todo',userRoutes);
module.exports=allroutes;