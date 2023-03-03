import { useEffect, useState } from "react";
import styles from "./Info.module.css";
import bg from "../../../../img/info.jpg";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";

const Info = () => {
  const url = "http://localhost:1999/admin/dev.php";
  const [dados, setDados] = useState([]);
  const navgate = useNavigate();
  let param = useParams();
  let id = param.id;
  useEffect(() => {
    axios.get(url).then((res) => {
      setDados(res.data);
    });
  }, []);

  const [modal, setModal] = useState(styles.modalNone);

  const open = (e) => {
    setModal(styles.modal);
    navgate(`/descricao/${e}`);
  };

  const close = () => {
    axios.get(url).then((res) => {
      setDados(res.data);
    });
    setModal(styles.modalNone);
    navgate("/");
  };

  const get = () => {
    axios
      .get(`http://localhost:1999/admin/dadounico.php?id=${id}`)
      .then((res) => {
        // setDados(res.data);
      });
  };

  return (
    <article style={{ backgroundImage: `url(${bg})` }} className={styles.infos}>
      <Modal modal={modal} closed={close} res={get} />
      <div className={styles.info}>
        <div className={styles.items}>
          {dados
            ? dados.map((d) => {
                return (
                  <div
                    key={d.id}
                    className={styles.item}
                    onClick={() => open(d.id)}
                  >
                    <h2>{d.titulo}</h2>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </article>
  );
};

export default Info;
