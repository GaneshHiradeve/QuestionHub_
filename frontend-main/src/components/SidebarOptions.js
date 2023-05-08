import React from "react";
import "./css/SidebarOptions.css";
// import Button from "@mui/material/Button";
import Tech from './img/Technology.jpg';
import lifestyle from './img/lifestyle.jpg';
import food from './img/food.jpg';
import echo from './img/economics.jpg';
import politics from './img/politics.jpg';
import sport from './img/sport.jpg';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getpostCategory } from "./redux/action/post";

function SidebarOptions() 

{
  const dispatch=useDispatch();
  const CategoryHandler=(e,category)=>{
    e.preventDefault();
    dispatch(getpostCategory(category))
  }
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'technology')}}>
        <img
          src={Tech}
          alt=""
        />
         <Link to={'/technology'} style={{ textDecoration: "none" }}>

        <h5 style={{  marginLeft:'10px' , color:'black'}} >Technology</h5>
        </Link>
      </div>
     
        

      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'lifestyle')}}>
        <img
          src={lifestyle}
          alt=""
        />
        <Link to={'/lifestyle'} style={{ textDecoration: "none" }}>
        <h5 style={{  marginLeft:'10px' , color:'black'}}>Lifestyle</h5>
        </Link>
      </div>


      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'politics')}}>
        <img
          src={politics}
          alt=""
        />
        <Link to={'/politics'} style={{ textDecoration: "none" }}>
        <h5 style={{  marginLeft:'10px' , color:'black'}}>Politics</h5>
        </Link>
      </div>

      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'food')}}>
        <img
          src={food}
          alt=""
        />
        <Link to={'/food'} style={{ textDecoration: "none" }}>
        <h5 style={{  marginLeft:'10px' , color:'black'}}>Food</h5>
        </Link>
      </div>

      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'economics')}}>
        <img
          src={echo}          
          alt=""
        />
        <Link to={'/economics'} style={{ textDecoration: "none" }}>
        <h5 style={{  marginLeft:'10px' , color:'black'}}>Economics</h5>
        </Link>
      </div>

      <div className="sidebarOption" onClick={(e)=>{CategoryHandler(e,'sport')}}>
        <img
          src={sport}
          alt=""
        />
        <Link to={'/sport'} style={{ textDecoration: "none" }}>
        <h5 style={{  marginLeft:'10px' , color:'black'}}>Sport</h5>
        </Link>
      </div>
    </div>
  );
}

export default SidebarOptions;
