import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./Edit.module.css";

function Edit() {
  const [dados, setDados] = useState();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [inputTitulo, setInputTitulo] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [url, setUrl] = useState("/admin");
  const [msg , setMsg] = useState('');
  const regEx = /^[a-z 0-9 à-ú À-Ú]+$/i;
  let navgate = useNavigate();
  let param = useParams();

  let id = param.id;

  useEffect(() => {
    axios
      .get(`https://henriquedeveloper.com.br/PHP/admin/edit.php?id=${id}`)
      .then((res) => {
        setDados(res.data);
      });
  }, []);

const post = () =>{
  axios.post(
    `https://henriquedeveloper.com.br/PHP/admin/update.php?id=${param.id}`,
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
}

  const edit = (e) => {
    e.preventDefault();

    navgate("/admin");
    if (!titulo || !descricao || !img) {
      setMsg("Há campo vazio")
      setInputTitulo(styles.input);
      setInputDesc(styles.input);
      navgate(`/admin/edit/${id}`)
    } else if (!regEx.test(titulo) || !regEx.test(descricao)) {
      setMsg("Texto inapropriado")
      navgate(`/admin/edit/${id}`);
    } else {
      post()
    }
  };

  return (
    <div className={styles.edit}>
      <h1>Editar</h1>
      <h4>{msg}</h4>
      <form onSubmit={edit}>
        <input
          type="file"
          name="img"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label>
          <span>Titulo</span>
          <input
            className={inputTitulo}
            type="text"
            name="titulo"
            placeholder={dados ? dados[0].titulo : ""}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <span>Descriçao</span>
          <input
            className={inputDesc}
            type="text"
            name="descricao"
            placeholder={dados ? dados[0].descricao : ""}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}

export default Edit;
