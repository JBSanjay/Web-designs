const express =require('express');
const router =express.Router();
const User=require('../models/user');

router.post('/sigin',(req,res)=>{

});
router.post('/signup',(req,res)=>{
     User.findOne({Email:req.body.email})
     .exec((error,user)=>{
        if(user)
        {
            return res.status(400).json({
                message:'user already exist'
            })
        }

        const {
            FirstName,
            LastName,
            Email,
            Password
        }=req.body;
    

     const _user=new user({
        FirstName,
        LastName,
        Email,
        Password,
        UserName:Math.random().toString() 
     });
     
     _user.save((error,data)=>{
        if(error)
        {
            return res.status(400).json({
                message:'something went wrong'
            });
        }
        else
        {
            return res.status(201).json({
                user:data
            })
        }
     });
    });
});

module.exports=router; 