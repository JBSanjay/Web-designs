const express = require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
// const urllib=require(express.urllib)
// import dotenv from "dotenv";
const app=express();  
const mongoose =require('mongoose');
const userRoutes=require('./routes/user');
mongoose.set('strictQuery', false);
env.config();
app.use(express.json());
// const name=urllib.parse.quote(sanjay5793);

//mongodb connection
// mongoose.connect('mongodb+srv://sanjay5793:aravind5793@cluster0.wcv1cbi.mongodb.net/projecttryWrites=true&w=majority',
// {
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     // useCreateIndex:true  
// }
// ).then(()=>{
//     console.log(`mongodb connected successfully!!`);
// });

// app.get('/',(req,res,next)=>{
//     res.status(200).json({
//         message:'hello From Server'
//     });
// });
// app.post('/data',(req,res,next)=>{
//     res.status(200).json({
//         message:req.body
//     });
// });

app.use(bodyParser); 
app.use('/api',userRoutes);


app.listen(2000, () => {
    console.log(`server is listening at 2000`);
});