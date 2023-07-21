import React, { useState } from "react";
import "./css/Post.css";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import Avatar from "@mui/material/Avatar";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
// import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import "react-responsive-modal/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import { Modal } from "react-responsive-modal";
import { Tooltip } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteuserPost,
  getpostLike,
  getpostReport,
} from "./redux/action/post";

import user1 from "./img/profile.png";

function Post({ data, like }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mydata = new Date(data.createdAt);
  const { user } = useSelector((state) => state.user);
  const Close = <CloseIcon />;
  const dispatch = useDispatch();

  const upvote1Handler = (e, id) => {
    e.preventDefault();
    dispatch(getpostLike(id));
  };
  const reportHandler = (e, id) => {
    e.preventDefault();
    dispatch(getpostReport(id));
  };
  const deletepostHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteuserPost(id));
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={user1} />
        <h3 className="user_name">{data.name}</h3>
        <small>
          {mydata.getDate()}/{mydata.getMonth()}/{mydata.getFullYear()}
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p
            style={{
              textDecoration: "none",
            }}
          >
            {data.description}
          </p>
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
            <div className="modal__question">
              <h1>Reply To Post</h1>
            </div>
            <div className="modal__answer">
              <ReactQuill placeholder="Enter Your answer" />
            </div>
            <div className="modal__buttons">
              <button type="submit" className="add">
                Post
              </button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <div onClick={(e) => upvote1Handler(e, data._id)}>
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
        <h3>{data.likes.length}</h3>
        &nbsp;&nbsp;
        {/* <div>
          <ArrowDownwardOutlinedIcon />
        </div>
        <h3>{data.likes.length}</h3> */}
        <Tooltip title="Report" placement="bottom">
          <div
            className="post__footerAction_report"
            onClick={(e) => reportHandler(e, data._id)}
          >
            <h5 className="report">
              <ReportGmailerrorredIcon />
            </h5>
          </div>
        </Tooltip>
        {/* <h3>{data.reports.length}</h3> */}
        <div style={{}}></div>
        <div className="post__footerLeft">
          <button
            onClick={() => setIsModalOpen(true)}
            className="post__btnAnswer"
            style={{ marginRight: "15px" }}
          >
            Reply
          </button>
          {user && user.role === "admin" ? (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="post__btnAnswer"
                style={{ marginRight: "15px" }}
              >
                Block
              </button>
              <button
                onClick={(e) => deletepostHandler(e, data._id)}
                className="post__btnAnswer"
                style={{ marginRight: "15px" }}
              >
                Delete
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div
        style={{
          margin: "5px 0px 0px 0px",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}
        className="post__answer"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            padding: "10px 5px",
          }}
          className="post-answer-container"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 600,
              color: "#888",
            }}
            className="post-answered"
          ></div>
          <div className="post-answer">This is Test answer</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
