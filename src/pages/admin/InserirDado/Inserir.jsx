import styles from "./Inserir.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import InsertDev from "./components/InsertDev";

function Inserir() {
  const [tituloInput, setTituloInput] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [areaInput, setAreaInput] = useState("");
  const [area, setArea] = useState("");
  const [img, setImg] = useState("");
  const [dados, setDados] = useState("");
  const [msg, setMsg] = useState("");
  const ImgUrl = "https://henriquedeveloper.com.br/PHP/admin/imagens.php";
  const url = "https://henriquedeveloper.com.br/PHP/admin/insert.php";
  let navgate = useNavigate();

  // useEffect(() => {
  //   axios.get(ImgUrl).then((res) => {
  //     setDados(res.data);
  //   });
  // }, []);
  // console.log(dados.length)

  const sub = (e) => {
    axios.get(ImgUrl).then((res) => {
      setDados(res.data);
    });
    e.preventDefault();
    if (!titulo || !descricao) {
      navgate("/admin/inserir");
      setAreaInput(styles.areaActive);
      setTituloInput(styles.inputActive);
    } else {
      navgate("/admin");
    }
    
    setTimeout(() => {
      
      if (dados.length >= 2) {
        navgate('/admin/inserir')
        setMsg('Limite maximo de dados atingido')
      }  else if (dados.length < 2) {
        navgate('/admin')
        // axios.post(
        //   {
        //     img,
        //     titulo,
        //     descricao,
        //   },
        //   {
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   }
        // );
      }
    }, 500);

    //   if (dados.length < 2) {

    //     navgate("/admin");
    //     setMsg("");
    //   } else {
    //     navgate("/admin/inserir");
    //   }
  };

  return (
    <>
      <div className={styles.inserir}>
        <h1>Adione o Elemento</h1>
        <h1>{msg}</h1>
        <form onSubmit={sub}>
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label>
            <span>Titulo</span>
            <input
              className={tituloInput}
              type="text"
              name="titulo"
              placeholder="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
          </label>
          <label>
            <span>descrição</span>
            <textarea
              className={areaInput}
              name="descricao"
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </label>
          <button type="submit">Inserir</button>
        </form>
      </div>
    </>
  );
}

export default Inserir;
