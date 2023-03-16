import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./EditDev.module.css";
const EditDev = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDesc] = useState("");
  const [dados, setDados] = useState("");
  let navgate = useNavigate();
  let param = useParams();
  let id = param.id;

  const url = `https://henriquedeveloper.com.br/PHP/admin/editdev.php?id=${id}`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setDados(res.data);
    });
  }, []);

  const edit = () => {
    if (titulo == "" || descricao == "") {
      setTitulo(styles.input);
      setDesc(styles.input);
      navgate(`/admin/editdev/${id}`);
    }
    if (titulo && descricao) {
      axios.post(
        `https://henriquedeveloper.com.br/PHP/admin/updatedev.php?id=${id}`,
        {
          titulo,
          descricao,
        }
      );
      navgate("/admin");
    } else {
      navgate(`/admin/editdev/${id}`);
    }
  };

  const editar = () => {
    "";
  };

  return (
    <div className={styles.edit}>
      <h1>Editar</h1>
      <form onSubmit={edit}>
        <label>
          <span>titulo</span>
          <input
            className={titulo}
            type="text"
            name="titulo"
            placeholder={dados ? dados[0].titulo : ""}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <label>
          <span>descrição</span>
          <textarea
            className={descricao}
            type="text"
            name="descricao"
            placeholder={dados ? dados[0].descricao : ""}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </label>
        <button>Editar</button>
      </form>
    </div>
  );
};

export default EditDev;
