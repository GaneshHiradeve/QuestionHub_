import mongoose from "mongoose";

const Userschema = new mongoose.Schema({

  name:{
       type: String,
       required: true,
      
  },
	email: { 
        type: String,
        required: true,
        unique: true
      },

 
	password:{
        type: String,
        required: true,
        
      
    },
    role:{
      type:String,
      required: true,
       },
    CreateAt:{
       type:Date,
       default:Date.now(),
    },
	
	
});

export const User = mongoose.model('User', Userschema);