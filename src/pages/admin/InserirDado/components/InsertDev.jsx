import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./InsertDev.module.css";
function InsertDev({ mod, close, get, op }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [modal, setModal] = useState(mod);
  const [dados, setDados] = useState("");
  const [msg, setMsg] = useState("");
  const url = "https://henriquedeveloper.com.br/PHP/admin/insertdev.php";
  const urlDados = "https://henriquedeveloper.com.br/PHP/admin/dev.php";

  const ps = () => {
    axios.post(url, {
      titulo,
      descricao,
    });
  };

  const very = () => {
    axios.get(urlDados).then((res) => {
      setDados(res.data);
    });
  };

  const post = (e) => {
    e.preventDefault();
    very();
    if (dados.length < 2) {
      setMsg("");
      ps();
    } else {
      setMsg("limite maximo de dados !");
      op();
    }
    setTimeout(() => {
      get();
    }, 300);
    setTitulo("");
    setDesc("");
  };

  const getdado = () => {
    close();
  };

  return (
    <div className={mod}>
      <AiOutlineCloseCircle
        onClick={getdado}
        className={styles.close}
      ></AiOutlineCloseCircle>
      <h1>Adione o Elemento</h1>
      <form onSubmit={post}>
        <label>
          <input
            type="text"
            name="titulo"
            value={titulo}
            placeholder="titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <textarea
            name="descricao"
            placeholder="descrição"
            value={descricao}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <button type="submit" onClick={close} className={styles.bt}>
          Cadastrar
        </button>
      </form>
      <h1>{msg}</h1>
    </div>
  );
}

export default InsertDev;
