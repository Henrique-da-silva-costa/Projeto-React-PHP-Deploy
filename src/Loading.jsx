import styles from "./Loading.module.css";
import reload from "./Reload.svg";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={reload} alt="" />
    </div>
  );
};

export default Loading;
