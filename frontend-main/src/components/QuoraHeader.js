import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
//  import Modal from "react-modal";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import CloseIcon from "@mui/icons-material/Close";
//import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "react-responsive-modal/styles.css";
import "./css/QuoraHeader.css";
import Swal from 'sweetalert2';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Modal } from "react-responsive-modal";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, getallPost } from "./redux/action/post";
import { Link } from "react-router-dom";
import user1 from "./img/user.jpg";
import Avatarmodal from "./Avatarmodal";
import ReactQuill from "react-quill";
import { Tooltip } from "@mui/material";
import { userLogout } from "./redux/action/user";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  console.log(user)
  // description,categories
  const [selction_cate, setselction_cate] = useState("sport");
  

  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("sport");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const PostHandler = (e) => {
    e.preventDefault();
    
    if(description.length>2000){
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Character limit exceeds',
        showConfirmButton: false,
        timer: 1500
      }) 
      
    }else{
    dispatch(CreatePost(description, categories));
    }
    setCategories("");
    if(description.length>2000){
    setDescription(description.slice(0,2000));}
    else{
      setDescription("")
    }
  };
  const userlogout=()=>{
    dispatch(userLogout())
}
const usernameslice=user.name.slice(0,6);
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo"></div>
       

       
        <div className="logoname">
         <h4>Quora</h4>
        </div>
       
        <div className="qHeader__icons">
          <Link to={"/header"}>
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


       <Link to={'/admindash'}>
          <div className="qHeader__icon">
            
            <Tooltip title="Assign" placement="bottom">
      <AssignmentTurnedInIcon />
              </Tooltip>
          </div>
          </Link>
          <div className="qHeader__icon">
            
            <Tooltip title="People" placement="bottom">
      <PeopleAltIcon />
              </Tooltip>
          </div>
          
       

        <div className="qHeader__input">
          <SearchIcon />
          <input type="text" placeholder="Search Questions" />
        </div>

        <div className="qHeader__Rem">
          <Avatarmodal
            src={user1}
            className="qHeader__Avatarcom"
            userdata={user}
          />
    <div className="qHeader__icon" style={{
      color:'rgb(115, 203, 250)'
    }}>
    {usernameslice}..
    </div>
          <Button onClick={() => setIsModalOpen(true)}>Post</Button>
          <Button onClick={userlogout} >
                Logout
              </Button>
        </div>
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
                     marginLeft:"10px",
                     width:"100px"
                     
                   }}
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                  >
                    <option value="sport">sport</option>
                    <option value="economics">economics</option>
                    <option value="technology">technology</option>
                    <option value="food">food</option>
                    <option value="lifestyle">lifestyle</option>
                    <option value="politics">politics</option>
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
