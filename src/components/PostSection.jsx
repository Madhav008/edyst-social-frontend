import React from "react";

import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { GoCommentDiscussion } from "react-icons/go";
const PostSection = () => {
  return (
    <div>
      <div className="posts-section">
          <div className="user-profile">
            <img src="https://i.stack.imgur.com/l60Hf.png" alt="user image" />
          </div>
          <div className="posts-details">
            <span>My thought about this post</span>

            <span>26-10-2021</span>
            <div id="reaction-btn">
              <button id="btn1">
                <AiFillLike />{" "}
              </button>
              <button id="btn2">
                <AiFillDislike />
              </button>
              <button id="btn3">
                <GoCommentDiscussion /> Discussion
              </button>
              <button id="btn4">
                <ImCross />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default PostSection;
