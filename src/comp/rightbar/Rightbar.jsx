import "./Rightbar.css";
import { BsFillGiftFill } from "react-icons/bs";
import { users } from "../../Data";
import Online from "../online/Online";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        <div className="birthday">
          <BsFillGiftFill className="gift-icon" />
          <span className="gift-text">
            <b>Eric Cantona</b> and <b>3 other friends</b> have a birtday today
          </span>
        </div>
        <div className="adsbar">
          <img src="assets/post/3.jpeg" alt="" />
        </div>
        <div className="online-friends">
          <h4>Online Friends</h4>
          <ul className="online-list">
            {users.map((u) => (
              <Online key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
