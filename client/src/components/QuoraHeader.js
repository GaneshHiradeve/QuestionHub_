import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost } from "./redux/action/post";
import { userLogout } from "./redux/action/user";
import { Tooltip } from "@mui/material";
import { Input } from '@mui/material';

import "react-responsive-modal/styles.css";
import "./css/QuoraHeader.css";

import HomeIcon from "@mui/icons-material/Home";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import Avatarmodal from "./Avatarmodal";

import user1 from "./img/profile.png";
import logo from "./img/logo.png";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  // console.log(user);
  // description,categories
  // const [selction_cate, setselction_cate] = useState("sport");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();

  const PostHandler = (e) => {
    e.preventDefault();
    if (description.length > 2000) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "Character limit exceeds",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(CreatePost(description, categories));
    }
    setCategories("");
    if (description.length > 2000) {
      setDescription(description.slice(0, 2000));
    } else {
      setDescription("");
    }
  };
  const userlogout = () => {
    dispatch(userLogout());
  };
  const usernameslice = user.name.slice(0, 50);

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <Link to={"/home"} style={{textDecoration: 'none', color: 'rgb(0,0,0)'}}>
            <div className="logoname">
              <img src={logo} alt="" />
              <h5>Discussify</h5>
            </div>
          </Link>
        </div>
        <div className="qHeader__icons">
          <Link to={"/home"}>
            <div className="qHeader__icon">
              <Tooltip title="Home" placement="bottom">
                <HomeIcon />
              </Tooltip>
            </div>
          </Link>
          <Link to={"/dashboard"}>
            <div className="qHeader__icon">
              <Tooltip title="Dashboard" placement="bottom">
                <FeaturedPlayListIcon />
              </Tooltip>
            </div>
          </Link>
          {/* <Link to={"/admindash"}>
            <div className="qHeader__icon">
              <Tooltip title="Admin Dashboard" placement="bottom">
                <AssignmentTurnedInIcon />
              </Tooltip>
            </div>
          </Link> */}
          {/* <div className="qHeader__icon">
            <Tooltip title="People" placement="bottom">
              <PeopleAltIcon />
            </Tooltip>
          </div> */}
          <div className="qHeader__input">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Questions"
              style={{ textAlign: "start" }}
            />
          </div>
        </div>
        <div className="qHeader__Rem">
          <Avatarmodal
            src={user1}
            className="qHeader__Avatarcom"
            userdata={user}
          />
          <div
            className="qHeader__icon"
            style={{
              color: "#000",
              fontWeight: "700",
            }}
          >
            {usernameslice}..
          </div>
          <Button className="headerButton" onClick={() => setIsModalOpen(true)}>
            Post
          </Button>
          <Button className="headerButton" onClick={userlogout}>
            Logout
          </Button>
        </div>
        <Modal
          open={isModalOpen}
          CloseIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <div className="modal__info">
            <Avatar src={user1} className="avatar" />
            <div className="model__scope">
              <p>&nbsp;&nbsp;{user.name}</p>
            </div>
          </div>
          <form onSubmit={PostHandler}>
            {/* <Input
            type="text" placeholder="select category"
            value={categories}
            onChange={e=>setCategories(e.target.value)}
            >
            </Input> */}
            <div className="category">
              <label>
                Category of Post :
                <select
                  style={{
                    marginLeft: "10px",
                    width: "100px",
                  }}
                  value={categories}
                  onChange={(e) => setCategories(e.target.value)}
                >
                  <option value="technology">Technology</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="politics">Politics</option>
                  <option value="food">Food</option>
                  <option value="economics">Economics</option>
                  <option value="sport">Sport</option>
                </select>
              </label>
            </div>
            <div className="modal__Field">
              <Input
                type="text"
                placeholder="Create Your Post"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              ></div>
            </div>
            <div className="modal__buttons">
              <button
                type="submit"
                className="add"
                onClick={() => setIsModalOpen(false)}
              >
                Post
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
