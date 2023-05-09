import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { ReportonPost, commentonPost, countLike, createPost, deletePost, downVote, getallPost, getallPostdata, getallreplytoPost, getcategoryData,upVote } from "../controllers/post.js";

const postRouter=express.Router();

postRouter.post('/createpost',isAuthenticated,createPost)
postRouter.get('/getallpost',isAuthenticated,getallPost)
postRouter.get('/alluserpostdata',isAuthenticated,getallPostdata)

postRouter.put('/upvote/:id',isAuthenticated,upVote);
postRouter.put('/downvote/:id',isAuthenticated,downVote);
postRouter.post('/comment/:id',isAuthenticated,commentonPost);

postRouter.get('/like/:id',isAuthenticated,countLike)
postRouter.get('/report/:id',isAuthenticated,ReportonPost)
postRouter.delete('/deletepost/:id',isAuthenticated,deletePost)



// filters
postRouter.get('/user/:category',isAuthenticated,getcategoryData)
postRouter.post('/user/reply/:id',isAuthenticated,commentonPost)
postRouter.get('/user/replytopost/:id',isAuthenticated,getallreplytoPost)







export default postRouter;