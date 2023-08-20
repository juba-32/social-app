import "./Sidebar.css";
import { MdRssFeed } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { BiSolidGroup } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { MdOutlinePartyMode } from "react-icons/md";
import { SiCoursera } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-item">
          <MdRssFeed className="icon" />
          <span className="text">Feed</span>
        </li>
        <li className="list-item">
          <BsFillChatLeftTextFill className="icon" />
          <span className="text">Chat</span>
        </li>
        <li className="list-item">
          <PiVideoFill className="icon" />
          <span className="text">Video</span>
        </li>
        <li className="list-item">
          <BiSolidGroup className="icon" />
          <span className="text">Groups</span>
        </li>
        <li className="list-item">
          <BsFillBookmarkFill className="icon" />
          <span className="text">Bookmark</span>
        </li>
        <li className="list-item">
          <AiFillQuestionCircle className="icon" />
          <span className="text">Questions</span>
        </li>
        <li className="list-item">
          <MdWork className="icon" />
          <span className="text">Jobs</span>
        </li>
        <li className="list-item">
          <MdOutlinePartyMode className="icon" />
          <span className="text">Events</span>
        </li>
        <li className="list-item">
          <SiCoursera className="icon" />
          <span className="text">Courses</span>
        </li>
      </ul>
      <button className="sidebarbutton">Show more</button>
      <hr className="hr" />
      <ul className="friendlist">
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
        <li className="friends">
          <img src="assets/person/2.jpeg" alt="" className="friendimg" />
          <span className="friendname">Elisabith jury</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
