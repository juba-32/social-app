import "./Online.css";

const Online = (user) => {
  return (
    <li className="online-profile">
      <div className="onlineprofilecontainer">
        <img className="onlineimg" src="assets/person/9.jpeg" alt="" />
        <span className="online-green-point"></span>
      </div>
      <span className="onlineusername">{user.username}</span>
    </li>
  );
};

export default Online;
