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

  useEffect(() => {
    axios.get(ImgUrl).then((res) => {
      setDados(res.data);
    });
  }, []);

  const regEx = /^[a-z 0-9]+$/i;
  // console.log(dados.length)

  // console.log(dados)
  const sub = (e) => {
    axios.get(ImgUrl).then((res) => {
      setDados(res.data);
    });

    e.preventDefault();
    navgate("/admin");
    if (!titulo || !descricao || !img) {
      navgate("/admin/inserir");
      setAreaInput(styles.areaActive);
      setTituloInput(styles.inputActive);
      setMsg('Há campos vazio ou Texto inapropriado')
    }
    else{
      setMsg("")
    }

    if(!regEx.test(titulo) || !regEx.test(descricao)){
navgate('/admin/inserir')
// setMsg('')
    }

    if (dados.length >= 2) {
      navgate("/admin/inserir");
      setMsg("Limite maximo de dados atingido, Por favor delete um dado");
      setTimeout(() => {
        navgate('/admin')
      }, 4000);
    } else if (dados.length < 2) {
      axios
        .post(
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
        )
        
      } 

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
        <h4>{msg}</h4>
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
