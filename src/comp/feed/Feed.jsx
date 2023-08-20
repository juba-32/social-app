import "./Feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { posts } from "../../Data";
const Feed = () => {
  return (
    <div className="feed">
      <Share />
      {posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
    </div>
  );
};

export default Feed;
