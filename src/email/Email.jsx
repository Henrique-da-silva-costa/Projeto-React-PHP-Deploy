import axios from "axios";
import { useState } from "react";
import styles from "./Email.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Email = ({ email, closs }) => {
  const [titulo, setTitulo] = useState();
  const [msg, setMsg] = useState();

  const post = (e) => {
    e.preventDefault();
    axios.post("https://henriquedeveloper.com.br/PHP/email.php", {
      titulo,
      msg,
    });
  };

  const closed = () => {
    closs();
  };
  return (
    <div className={email}>
      <button className={styles.close} onClick={closed}>
        <AiOutlineCloseCircle />
      </button>
      <form onSubmit={post}>
        <h1>Email </h1>
        <label>
          <input
            type="text"
            name="titulo"
            placeholder="titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <textarea
            name="msg"
            placeholder="mensagem"
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Email;
