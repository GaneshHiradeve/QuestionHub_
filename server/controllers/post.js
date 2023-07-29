import { Comment } from "../models/comment.js";
import { Post } from "../models/post.js";
import { User } from "../models/user.js";

export const createPost = async (req, res) => {
  const { description, categories } = req.body;

  //   const username=await User.findById(id)

  



  const post = await Post.create({
    description,
    categories,
    user: req.user,
    name: req.user.name,
  });

  res.status(200).json({
    success: true,
    message: "Post done",
    post: post,
  });
};

export const commentonPost = async (req, res) => {
  const id = req.params.id;
  const { comment } = req.body;

  const answer = await Comment.create({
    comment,
    user: req.user,
    replyto: id,
  });

  res.json({
    message: "get a post reply",
    answer: answer,
  });
};

export const getallPost = async (req, res) => {
  const id = req.user._id;

  const userpost = await Post.find({ user: id });

  res.status(201).json({
    message: "get all post",
    userpost: userpost,
  });
};

export const  getallPostdata = async (req, res) => {
  const allData = await Post.find({}).sort({ likes: -1 });

  res.status(201).json({
    success: true,
    allData: allData,
    message: "all data done ",
  });
};

export const upVote = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  post.upvote = post.upvote + 1;

  await post.save();

  res.status(201).json({
    post: post,
  });
};

export const downVote = async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  post.upvote = post.upvote - 1;

  await post.save();
  res.status(201).json({
    post: post,
  });
};

export const getcategoryData = async (req, res) => {
  const category = req.params.category;
  const categorydata = await Post.find({ categories: category });

  res.json({
    categorydata: categorydata,
  });
};

export const getallreplytoPost = async (req, res) => {
  const id = req.params.id;

  const replys = await Comment.find({ replyto: id });

  res.status(201).json({
    replys,
  });
};

export const countLike = async (req, res) => {
  const id = req.params.id;
  const uid = req.user._id;

  const post = await Post.findById(id);

  const check = await post.likes.includes(uid);
  if (!check) {
    post.likes.push(uid);

    await post.save();

    res.status(200).json({
      message: "like done",
      like1: 1,
      totallength: post.likes.length,
    });
  } else {
    post.likes.pop(uid);

    await post.save();

    res.status(200).json({
      message: "like removed",
      like1: 0,
      totallength: post.likes.length,
    });
  }
};


export const ReportonPost = async (req, res) => {
  const id = req.params.id;
  const uid = req.user._id;

  const post = await Post.findById(id);

  const check = await post.reports.includes(uid);
  if (!check) {
    post.reports.push(uid);

    await post.save();

    res.status(200).json({
      message: "report done",
      report: 1,
      reportlength: post.reports.length,
    });
  } else {
    post.reports.pop(uid);

    await post.save();

    res.status(200).json({
      message: "report removed",
      report: 0,
      reportlength: post.reports.length,
    });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;
  
   
  const post = await Post.findById(id);

  if(!post) return res.status(404).json({
    success:"false",
    message:"Post not found"
})

  await post.deleteOne();

  res.status(201).json({
    success: true,
    message: "Post deleted successfully",
  });
};

