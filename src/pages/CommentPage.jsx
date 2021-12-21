import React from "react";
import Comments from "../components/Comments";
import Navbar from "../components/Navbar";

const CommentPage = () => {
  return (
    <>
      <Navbar />
      <div className="comment-bg">
        <div className="comment-page">
          <div className="comments-section">
            <div className="user-profile">
              <img src="https://i.stack.imgur.com/l60Hf.png" alt="user image" />
            </div>
            <div className="comments-details">
              <span>My thought about this post</span>
              <span>26-10-2021</span>
            </div>
          </div>
          <div className="comment-section">
            <div className="comment-area">
              <img src="https://i.stack.imgur.com/l60Hf.png" alt="user image" />
              <textarea
                name="comment"
                id=""
                cols="30"
                rows="10"
                placeholder="What's on your mind ?"
              ></textarea>
            </div>
            <button className="comment-btn" type="submit">
              Comment
            </button>
          </div>

          <Comments />
        </div>
      </div>
    </>
  );
};

export default CommentPage;
