import styles from "./Inserir.module.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InsertDev from "./components/InsertDev";

function Inserir() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [area, setArea] = useState("");
  const [img, setImg] = useState(null);
  let navgate = useNavigate();

  const url = "https://henriquedeveloper.com.br/PHP/admin/insert.php";
  const submit = (e) => {
    if (titulo == "" || descricao == "") {
      setArea(styles.areaActive);
    }
    axios.post(
      url,
      {
        img,
        titulo,
        descricao,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  const imgInsert = () => {
    navgate("/admin");
  };

  return (
    <>
      <div className={styles.inserir}>
        <h1>Adione o Elemento</h1>
        <form onClick={submit}>
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label>
            <span>Titulo</span>
            <input
              type="text"
              className={titulo}
              name="titulo"
              placeholder="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </label>
          <label>
            <span>descrição</span>
            <textarea
              className={area}
              name="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </label>
          <button type="button" onClick={imgInsert}>
            Inserir
          </button>
        </form>
      </div>
    </>
  );
}

export default Inserir;
