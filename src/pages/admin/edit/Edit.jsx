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

  const edit = () => {
    if (titulo && descricao) {
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
      navgate("/admin");
    } else {
      setInputTitulo(styles.input);
      setInputDesc(styles.input);
      navgate(`/admin/edit/${id}`);
    }
  };

  return (
    <div className={styles.edit}>
      <h1>Editar</h1>
      <form>
        <input
          type="file"
          name="img"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label>
          <input
            className={inputTitulo}
            type="text"
            name="titulo"
            placeholder={dados ? dados[0].titulo : ""}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <input
            className={inputDesc}
            type="text"
            name="descricao"
            placeholder={dados ? dados[0].descricao : ""}
            onChange={(e) => setDesc(e.target.value)}
          />
        </label>
        {/* <Link onClick={post} to="/admin"> */}
        <button type="button" onClick={edit}>
          Editar
        </button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default Edit;
