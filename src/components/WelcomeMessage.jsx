import { Link } from "react-router-dom";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  return (
    <center className={styles.welcomeMsg}>
      <h2>Welcome to The</h2>
      <h1>
        <b>Social Media App</b>
      </h1>
      <h3 style={{ marginBottom: "15px" }}>Created by Milin Ka.patel</h3>
      <Link to="/home">
        <button
          className="btn btn-primary"
          style={{ margin: "10px 0" }}
          onClick={() => setSelectedTab("Home")}
        >
          Go To Home Page
        </button>
      </Link>
    </center>
  );
};
export default WelcomeMessage;
