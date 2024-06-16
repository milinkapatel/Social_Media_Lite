import { MdDelete } from "react-icons/md";
import styles from "./Post.module.css";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className={`card ${styles.postCard}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${styles.deleteButton}`}
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className={`badge text-bg-secondary ${styles.tag}`}>
            {tag}
          </span>
        ))}
        <div className={`alert alert-success ${styles.reaction}`} role="alert">
          This post has been reacted by <b>{post.reactions}</b> people
        </div>
      </div>
    </div>
  );
};

export default Post;
