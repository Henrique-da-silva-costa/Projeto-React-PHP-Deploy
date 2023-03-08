import axios from "axios";
import { useState } from "react";
import styles from "./Email.module.css";

const Email = () => {
  const [titulo, setTitulo] = useState();
  const [msg, setMsg] = useState();

  const post = (e) => {
    e.preventDefault();
    axios.post("https://henriquedeveloper.com.br/PHP/email.php", {
      titulo,
      msg,
    });
  };
  return (
    <form onSubmit={post}>
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
  );
};

export default Email;
