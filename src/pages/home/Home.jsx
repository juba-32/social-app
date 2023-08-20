import "./Home.css";
import Topbar from "../../comp/topbar/Topbar";
import Sidebar from "../../comp/sidebar/Sidebar";
import Rightbar from "../../comp/rightbar/Rightbar";
import Feed from "../../comp/feed/Feed";

const Home = () => {
  return (
    <div>
      <Topbar />
      <div className="home-container">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
