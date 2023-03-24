import styles from "./Page.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Dev from "./components/Dev";
import Loading from "../../../Loading";
import Vazio from "../../../Vazio";
import Conf from "../../../Conf";

function Page() {
  const [dados, setDados] = useState("");
  const [page, setPage] = useState(styles.page);
  const ImgUrl = "https://henriquedeveloper.com.br/PHP/admin/imagens.php";
  const [loading, setLoading] = useState(false);
  const navgate = useNavigate();
  const [id, setId] = useState("");
  // modal

  const [op, setOp] = useState(styles.close);

  const open = (e) => {
    setId(e);
    setOp(styles.confirm);
  };

  const closs = () => {
    setOp(styles.close);
  };

  // modal

  const get = () => {
    setTimeout(() => {
      axios.get(ImgUrl).then((res) => {
        setDados(res.data);
      });
      setLoading(true);
      // navgate("/admin");
    }, 1500);
  };
  useEffect(() => {
    get();

    setTimeout(() => {
      if (!session) {
        navgate("/login");
      }
    }, 1000);
  }, []);

  const deletar = () => {
    // setTimeout(() => {
    axios.delete(
      `https://henriquedeveloper.com.br/PHP/admin/delete.php?id=${id}`,
      {
        img: "img",
        titulo: "titulo",
        descricao: "descricao",
      }
    );
    get();
    // }, 300);
  };

  const session = sessionStorage.getItem("session");
  if (session == false || session == null) {
    return (
      <div className={styles.notLog}>
        <h1 style={{ marginTop: "5rem" }}>Usuario não existe</h1>
      </div>
    );
  } else {
    return (
      <div className={page}>
        <Conf val={op} closed={closs} del={deletar} />
        <h1 className={styles.admin}>Admin</h1>
        <div>
          <h1>Slide</h1>
          <Link to="/admin/inserir">
            <div className={styles.adicionarAll}>
              <button className={styles.adicionar}>Adicionar Elemento</button>
            </div>
          </Link>
        </div>
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
                        onClick={() => open(d.id)}
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
        {dados.length === 0 && loading ? <Vazio /> : ""}
        {!loading ? <Loading /> : ""}
        <Dev />
      </div>
    );
  }
}

export default Page;
