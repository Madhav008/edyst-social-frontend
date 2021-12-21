import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { BsCodeSlash } from "react-icons/bs";
import PostSection from "../components/PostSection";
import { useSelector } from "react-redux";
const HomePage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <span className="logo">
            <BsCodeSlash /> The Social Media App
          </span>
        </div>
        <div className="nav-right">
          <span className="register">
            <IoIosLogOut /> Logout
          </span>
          <span className="register">
             {user.name}
          </span>
        </div>
      </div>

      <div className="homepage">
        <div className="heading-section">
          <h3>Welcome to a thriving tech community!</h3>
          <span>
            Discuss the latest on technology and trends. Be Civil and supportive
          </span>
        </div>
        <div className="post-area">
          <img src="https://i.stack.imgur.com/l60Hf.png" alt="user image" />
          <textarea
            name="post"
            id=""
            cols="30"
            rows="10"
            placeholder="What's on your mind ?"
          ></textarea>
        </div>
        <button className="post" type="submit">
          Post
        </button>

        <PostSection />
        <PostSection />
        <PostSection />
        <PostSection />
        <PostSection />
      </div>
    </div>
  );
};

export default HomePage;
