import React from "react";
import { ImCross } from "react-icons/im";
const Comments = () => {
  return (
    <div className="comments">
      <div className="user-profile">
        <img src="https://i.stack.imgur.com/l60Hf.png" alt="user image" />
      </div>
      <div className="posts-details">
        <span>My thought about this post</span>

        <span>26-10-2021</span>
        <div id="comment-reaction-btn">
          <button id="btn4">
            <ImCross />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
