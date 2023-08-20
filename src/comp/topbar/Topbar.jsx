import React from "react";
import "./Topbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsChatLeftFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <h3>AMB</h3>
      </div>
      <div className="topbar-center">
        <input type="search" placeholder="search for friend, post, video" />
      </div>
      <div className="topbar-right">
        <div className="topbarLinks">
          <h3>Home</h3>
          <h3>Feed</h3>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill className="icons" />
            <span>1</span>
          </div>
          <div className="topbarIconItem">
            <BsChatLeftFill className="icons" />
            <span>2</span>
          </div>
          <div className="topbarIconItem">
            <IoMdNotifications className="icons" />
            <span>6</span>
          </div>
        </div>
        <img src="assets/person/1.jpeg" alt="" className="topbarImg" />

      </div>
    </div>
  );
};

export default Topbar;
