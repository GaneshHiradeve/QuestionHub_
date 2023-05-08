import React from "react";
import QuoraBox from "./QuoraBox";
import "./css/Feed.css";
import Post from "./Post";

function Feed({allData,like}) {
  
  return (
    <div className="feed">
      {/* <QuoraBox /> */}
      {/* {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))} */}

{allData &&
          allData.map((data, index) => {
          
            return <Post key={index} data={data} like={like} />;
          })}
      
      
    </div>
  );
}

export default Feed;
