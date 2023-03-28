import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./InsertDev.module.css";
function InsertDev({ mod, close, get, op }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [val, setVal] = useState("");
  const [err, setErr] = useState("");
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
  const regEx = /^[a-z 0-9 à-ú À-Ú]+$/i;
  const post = (e) => {
    e.preventDefault();
    if (!titulo || !descricao) {
      setErr("campo vazio");
      op();
    } else if (!regEx.test(titulo) || !regEx.test(descricao)) {
      setErr("Dado inválido, Por favor digite um dado válido");
      // setErr("")
      op();
    }
    very();
    if (dados.length < 2) {
      setMsg("");
      ps();
    } else {
      setMsg("limite maximo de dados !");
      setTimeout(() => {
        setMsg("");
      }, 3000);
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
      <h1>Adicione o Elemento</h1>
      <h3>{err}</h3>
      <form onSubmit={post}>
        <label className={styles.label}>
          <span>Titulo</span>
          <input
            className={titulo}
            type="text"
            name="titulo"
            value={titulo}
            placeholder={val}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label className={styles.label}>
          <span>Descrição</span>
          <textarea
            className={descricao}
            name="descricao"
            placeholder={val}
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
