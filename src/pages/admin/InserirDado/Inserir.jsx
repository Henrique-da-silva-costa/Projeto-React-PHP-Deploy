import styles from "./Inserir.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InsertDev from "./components/InsertDev";

function Inserir() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [area, setArea] = useState("");
  const [img, setImg] = useState(null);
  const [dados, setDados] = useState("");
  const [msg, setMsg] = useState("");
  const ImgUrl = "https://henriquedeveloper.com.br/PHP/admin/imagens.php";
  const url = "https://henriquedeveloper.com.br/PHP/admin/insert.php";
  let navgate = useNavigate();

  useEffect(() => {
    axios.get(ImgUrl).then((res) => {
      setDados(res.data);
    });
  }, []);

  const post = () => {
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

  console.log(dados.length);
  const submit = (e) => {
    if (titulo == "" || descricao == "") {
      setArea(styles.areaActive);
      setTitulo(styles.inputActive);
      navgate("/admin/inserir");
    }
    if (dados.length < 5) {
      setMsg("limite maximo de 5 post");
      navgate("/admin/inserir");
    }
    if (dados.length < 5 && titulo && descricao && img) {
      post();
    } else {
      navgate("/admin/inserir");
    }
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
        <h1>{msg}</h1>
      </div>
    </>
  );
}

export default Inserir;
