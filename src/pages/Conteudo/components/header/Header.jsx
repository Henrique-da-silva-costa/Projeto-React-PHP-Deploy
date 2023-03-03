import header from "../../../../img/header.jpg";
import footer from "../../../../img/footer.jpg";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [head, setHead] = useState(header);
  return (
    <header style={{ backgroundImage: `url(${head})` }}>
      <div className={styles.elements}>
        <h1>TECNOLOGIAS</h1>
        <div className={styles.techs}>
          {/* <div className={styles.front}> */}
          <button onClick={() => setHead(header)}>
            <h2>REACT</h2>
          </button>
          {/* </div> */}
          {/* <div className={styles.back}> */}
          <button onClick={() => setHead(footer)}>
            <h2>PHP</h2>
          </button>
          {/* </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
