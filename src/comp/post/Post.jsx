import "./Post.css";
import { CgOptions } from "react-icons/cg";
import { BiLike } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { users } from "../../Data";

const Post = ({ post }) => {
  return (
    <div className="feed-post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="left">
            <img
              src={users.filter((u) => u.id === post?.userId)[0].profileimg}
              alt=""
              className="postimg"
            />
            <span className="postprofilename">
              {users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postdate"> {post.data}</span>
          </div>
          <div className="right">
            <CgOptions className="options" />
          </div>
        </div>
        <div className="post-center">
          <span className="posttext">{post.desc}</span>
          <img src={post.photo} alt="" className="mainimg" />
        </div>
        <div className="post-bottom">
          <div className="left">
            <BiLike className="icons" />
            <FcLike className="icons" />
            <span className="likedcounter">{post.lik} pepole liked</span>
          </div>
          <div className="right">
            <span className="postcomment">{post.comment} Comment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
