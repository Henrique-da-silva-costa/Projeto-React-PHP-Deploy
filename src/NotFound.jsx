import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1>
        <strong>Essa Pagina Não Existe</strong>
      </h1>
      <button type="button">
        <Link to={"/"}>Voltar para pagina Inicial</Link>
      </button>
    </div>
  );
};

export default NotFound;
