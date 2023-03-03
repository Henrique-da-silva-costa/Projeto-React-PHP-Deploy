import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./InsertDev.module.css";
function InsertDev({ mod, close }) {
  const [titulo, setTitulo] = useState();
  const [descricao, setDesc] = useState();
  const [modal, setModal] = useState(mod);
  //   const [img, setImg] = useState();
  const url = "https://henriquedeveloper.com.br/PHP/admin/insertDev.php";

  const post = (e) => {
    e.preventDefault();
    axios.post(url, {
      titulo,
      descricao,
    });
    setTitulo("");
    setDesc("");
  };

  return (
    <div className={mod}>
      <AiOutlineCloseCircle
        onClick={close}
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
    </div>
  );
}

export default InsertDev;
