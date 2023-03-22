import axios from "axios";
import { useState } from "react";
import styles from "./Email.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Email = ({ email, closs }) => {
  const [titulo, setTitulo] = useState("");
  const [vazio, setVazio] = useState("");
  const [msgValue, setMsgValue] = useState("");
  const [msg, setMsg] = useState("");

  const post = (e) => {
    e.preventDefault();
    if (titulo && msg) {
      axios.post("https://henriquedeveloper.com.br/PHP/email.php", {
        titulo,
        msg,
      });
      setMsgValue("");
      closs();
    } else {
      setVazio(styles.vazio);
      setMsgValue("campo vazio");
    }
    setTitulo("");
    setMsg("");
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
        <h1>Me envie um E-mail</h1>
        <label>
          <span>Titulo</span>
          <input
            className={vazio}
            type="text"
            value={titulo}
            name="titulo"
            placeholder={msgValue}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <span>Mensagem</span>
          <textarea
            name="msg"
            value={msg}
            placeholder={msgValue}
            className={vazio}
            onChange={(e) => setMsg(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Email;
