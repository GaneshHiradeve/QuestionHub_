import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  replyto:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
  
  
});

export const Comment = mongoose.model("Comment", CommentSchema);