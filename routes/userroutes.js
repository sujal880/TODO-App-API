const express=require('express');
const routes=express.Router();
const registeruser=require('../controllers/usercontrollers');
const getuser=require('../controllers/getuserdetails');
routes.post('/signup',registeruser);
routes.get('/getuser',getuser);
module.exports=routes;