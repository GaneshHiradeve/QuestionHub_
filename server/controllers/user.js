import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";

export const userRegister = async (req, res) => {
  let { name, email, password, confirmpassword } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(201).json({
      success: true,
      message: "User Already Exits",
    });
  }
  if (password != confirmpassword) {
    return res.status(201).json({
      success: true,
      message: "Password Not Match",
    });
  }
  password = await bcrypt.hash(password, 10);
  
  const role='user';

  user = await User.create({
    name,
    email,
    role,
    password,
  });



  const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);

  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      user: user,
      message: "User Register Successfully",
    });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(201).json({
      success: true,
      message: "User Not Exit",
    });
  }

  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    return res.status(201).json({
      success: true,
      message: "Password Not Match",
    });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN);

  res
    .status(201)
    .cookie("token", token, {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      user: user,
      message: "User Login Successfully",
    });
};

export const userLogout = (req,res) => {
  res
    .status(201)
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      success: true,
      message: "User Logout Successfully",
    });
};

export const userprofile=(req,res)=>{
     

  res.status(200).json({
      success:true,
      user:req.user
  })     
    
}


