const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    FirstName:{
        type :String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    LastName:{
        type :String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    Email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_Password:{
        type:String,
        required:true,
        trim:true, 
    } ,
    Role:{
        type:String,
        enum:['user','admin'],
        default:'admin'
    } ,
    ContactNumber:{
        type:String 
    },
    ProfilePicture:{
        type:String
    },
},{timestamps:true});


//encrypting the password 
userSchema.virtual('password').set(
    (password)=>{
        this.hash_Password=bcrypt.hashSync(password,10);
    });

userSchema.methods={
    authenticate: (password)=>{
        return bcrypt.compareSync(password,this.hash_Password);
    }
};

module.exports=mongoose.model('user',userSchema);