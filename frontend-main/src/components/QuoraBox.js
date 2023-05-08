import React from 'react'
import Avatar from "@mui/material/Avatar";
import "./css/QuoraBox.css";
function QuoraBox() {
  return (
    <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar />
        {/* <Avatar src={user?.photo} /> */}
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  )
}

export default QuoraBox