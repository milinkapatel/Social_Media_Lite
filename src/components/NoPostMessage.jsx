import styles from "./NoPostMessage.module.css";
const NoPostMessage = () => {
  return (
    <center className={styles.noPostMsg}>
      <h1>There are no posts</h1>
      <button className="btn btn-primary" style={{ margin: "10px 0" }}>
        Get posts from Server
      </button>
    </center>
  );
};
export default NoPostMessage;
