import React from "react";
import "./css/SidebarOptions.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getpostCategory } from "./redux/action/post";
import {
  Activity,
  BadgeDollarSign,
  Laptop2,
  Siren,
  Soup,
  Trophy,
} from "lucide-react";

function SidebarOptions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CategoryHandler = (e, category) => {
    e.preventDefault();
    dispatch(getpostCategory(category));
  };

  return (
    <div className="sidebarOptions">
      <Link to={"/technology"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption "
          onClick={(e) => {
            CategoryHandler(e, "technology");
            navigate("/technology");
          }}
        >
          <Laptop2 size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Technology</h5>
        </div>
      </Link>

      <Link to={"/lifestyle"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption"
          onClick={(e) => {
            CategoryHandler(e, "lifestyle");
            navigate("/lifestyle");
          }}
        >
          <Activity size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Lifestyle</h5>
        </div>
      </Link>

      <Link to={"/politics"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption"
          onClick={(e) => {
            CategoryHandler(e, "politics");
            navigate("/politics");
          }}
        >
          <Siren size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Politics</h5>
        </div>
      </Link>

      <Link to={"/food"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption"
          onClick={(e) => {
            CategoryHandler(e, "food");
            navigate("/food");
          }}
        >
          <Soup size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Food</h5>
        </div>
      </Link>

      <Link to={"/economics"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption"
          onClick={(e) => {
            CategoryHandler(e, "economics");
            navigate("/economics");
          }}
        >
          <BadgeDollarSign size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Economics</h5>
        </div>
      </Link>

      <Link to={"/sport"} style={{ textDecoration: "none" }}>
        <div
          className="sidebarOption"
          onClick={(e) => {
            CategoryHandler(e, "sport");
            navigate("/sport");
          }}
        >
          <Trophy size={25} color="#222" strokeWidth={2} />
          <h5 style={{ marginLeft: "10px", color: "black" }}>Sport</h5>
        </div>
      </Link>
    </div>
  );
}

export default SidebarOptions;
