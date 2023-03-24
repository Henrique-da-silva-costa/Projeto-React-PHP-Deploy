import axios from "axios";
import { setIn } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditDev.module.css";
const EditDev = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [inp, setInp] = useState("");
  const [dados, setDados] = useState("");
  const regEx = /^[a-z 0-9 à-ú À-Ú]+$/i;
  const [msg, setMsg] = useState("");
  let navgate = useNavigate();
  let param = useParams();
  let id = param.id;

  const url = `https://henriquedeveloper.com.br/PHP/admin/editdev.php?id=${id}`;
  const urlUP = `https://henriquedeveloper.com.br/PHP/admin/updatedev.php?id=${id}`;
  const data = {
    titulo,
    descricao,
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      setDados(res.data);
    });
  }, []);

  const edit = (e) => {
    e.preventDefault();
    navgate("/admin");
    if (!titulo || !descricao) {
      navgate(`/admin/editdev/${id}`);
      setInp(styles.input);
      setMsg("Há campo vazio");
    } else if (!regEx.test(titulo) || !regEx.test(descricao)) {
      navgate(`/admin/editdev/${id}`);
      setMsg("Texto invalido");
    } else {
      axios.post(urlUP, data);
    }
  };

  return (
    <div className={styles.edit}>
      <h1>Editar</h1>
      <h4>{msg}</h4>
      <form onSubmit={edit}>
        <label>
          <span>titulo</span>
          <input
            className={inp}
            type="text"
            name="titulo"
            placeholder={dados ? dados[0].titulo : ""}
            onChange={(e) => setTitulo(e.target.value)}
          />
          {/* <span>{msg}</span> */}
        </label>
        <label>
          <span>descrição</span>
          <textarea
            className={inp}
            type="text"
            name="descricao"
            placeholder={dados ? dados[0].descricao : ""}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          {/* <span>{msg}</span> */}
        </label>
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};

export default EditDev;
