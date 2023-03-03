import styles from "./Page.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Dev from "./components/Dev";

function Page() {
  const [dados, setDados] = useState();
  const [page, setPage] = useState(styles.page);
  const ImgUrl = "https://henriquedeveloper.com.br/PHP/admin/imagens.php";
  const navgate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      axios.get(ImgUrl).then((res) => {
        setDados(res.data);
      });
    }, 700);
  }, []);

  const deletar = (e) => {
    axios.delete(
      `https://henriquedeveloper.com.br/PHP/admin/delete.php?id=${e}`,
      {
        img: "img",
        titulo: "titulo",
        descricao: "descricao",
      }
    );
    setTimeout(() => {
      axios.get(ImgUrl).then((res) => {
        setDados(res.data);
      });
    }, 500);
  };

  const session = sessionStorage.getItem("session");
  if (session == false || session == null) {
    return (
      <div className={styles.notLog}>
        <h1>Usuario não existe</h1>
        <button onClick={() => navgate("/login")}>Retornar Para Login</button>
      </div>
    );
  } else {
    return (
      <div className={page}>
        <h1>page</h1>

        <Link to="/admin/inserir">
          <div className={styles.adicionarAll}>
            <button className={styles.adicionar}>Adicionar Elemento</button>
          </div>
        </Link>

        <h2>slide</h2>

        {dados
          ? dados.map((d) => {
              return (
                <div key={d.id}>
                  <div className={styles.conteudo}>
                    <div className={styles.imgConteudo}>
                      <h2>{d.titulo}</h2>
                      <img src={d.img} alt="" />
                    </div>
                    <div key={d.id} className="">
                      <Link to={`/admin/edit/${d.id}`}>
                        <button className={styles.editar}>
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => deletar(d.id)}
                        className={styles.excluir}
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : ""}

        <Dev />
      </div>
    );
  }
}

export default Page;
