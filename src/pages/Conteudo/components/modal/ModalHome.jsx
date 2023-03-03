import { useEffect, useState } from "react";
import styles from "./ModalHome.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

const ModalHome = ({ msg }) => {
  const [modal, setModal] = useState(styles.modalNone);
  msg = "Bem Vindo !";
  useEffect(() => {
    setTimeout(() => {
      setModal(styles.modal);
    }, 1500);
  }, []);

  const close = () => {
    setModal(styles.modalNone);
  };
  return (
    <div className={modal}>
      <div className={styles.info}>
        <AiFillCloseCircle className={styles.close} onClick={close} />
        <h1>{msg}</h1>
      </div>
    </div>
  );
};

export default ModalHome;
