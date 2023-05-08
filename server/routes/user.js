import express from "express";
import { userLogin, userLogout, userRegister, userprofile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const Router=express.Router();

Router.post('/register',userRegister);
Router.post('/login',userLogin)
Router.get('/logout',userLogout); //TODO
Router.get('/profile',isAuthenticated,userprofile);




export default Router;