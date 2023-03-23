import { useEffect, useState } from "react";
import styles from "./Info.module.css";
import bg from "../../../../img/info.jpg";
import axios from "axios";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../Loading";

const Info = () => {
  const url = "https://henriquedeveloper.com.br/PHP/admin/dev.php";
  const [dados, setDados] = useState('');
  const navgate = useNavigate();
  const [load, setLoad] = useState(false);
  let param = useParams();
  let id = param.id;
  useEffect(() => {
    setTimeout(() => {
      axios.get(url).then((res) => {
        setDados(res.data);
        setLoad(true);
      });
    }, 1000);
  }, []);

  // const [modal, setModal] = useState(styles.modalNone);

  // const open = (e) => {
  //   setModal(styles.modal);
  //   navgate(`/descricao/${e}`);
  // };

  // const close = () => {
  //   axios.get(url).then((res) => {
  //     setDados(res.data);
  //   });
  //   setModal(styles.modalNone);
  //   navgate("/");
  // };

  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", margin: 0 }}>
        Informações
      </h1>
      <article
        style={{ backgroundImage: `url(${bg})` }}
        className={styles.infos}
      >
        {/* <Modal modal={modal} closed={close} /> */}
        <div className={styles.info}>
          <div className={styles.items}>
            {dados
              ? dados.map((d) => {
                  return (
                    <div key={d.id} className={styles.item}>
                      <h2>{d.titulo}</h2>
                      <p>{d.descricao}</p>
                    </div>
                  );
                })
              : ""}
            {!load ? <Loading /> : ""}
          </div>
        </div>
      </article>
    </>
  );
};

export default Info;
