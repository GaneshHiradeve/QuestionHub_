import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name:{
    type:String
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  categories:{
    type:String
  },
  upvote:{
  type:Number,
  default:0,
  },
  
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  reports:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  
  
});

export const Post = mongoose.model("Post", PostSchema);