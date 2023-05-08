import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';
import Router from "./routes/user.js";
import mongoose from "mongoose";
import postRouter from "./routes/post.js";



const app=express();
app.use(express.json()) 
app.use(cookieParser()) 
app.use(express.urlencoded({extended:true}));


config({
    path:".env"
})

app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:process.env.fronted_url,
    methods:['GET','POST','PUT','DELETE'],
    credentials:true,

}));

app.use(Router)
app.use(postRouter)

mongoose.connect(process.env.URL)
.then(console.log("DB Connected"))
.catch((err)=>console.log(err))

app.listen(process.env.PORT,()=>{
    console.log(`connected to port ${process.env.PORT}`)
})