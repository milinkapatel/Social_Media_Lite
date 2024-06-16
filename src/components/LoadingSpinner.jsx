import styles from "./LoadingSpinner.module.css";
const LoadingSpinner = () => {
  return (
    <div className={`text-center ${styles.spinner}`}>
      <div
        className={`spinner-border `}
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
