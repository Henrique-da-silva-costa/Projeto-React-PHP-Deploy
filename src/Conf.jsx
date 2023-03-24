import React, { useState } from "react";
import styles from "./Conf.module.css";
function Conf({ val, closed, del }) {
  const close = () => {};
  // const [conf, setConf] = useState(styles.confirm);

  const deletar = () => {
    del();
    closed();
  };

  return (
    <div className={val}>
      <div className={styles.block}>
        <div className={styles.info}>
          <h2>Tem Certeza ?</h2>
        </div>
        <div className={styles.buttons}>
          <button onClick={deletar} className={styles.bt1}>
            ok
          </button>
          <button onClick={closed} className={styles.bt2}>
            cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Conf;
