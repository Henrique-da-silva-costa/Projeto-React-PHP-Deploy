import axios from "axios";
import { useEffect, useState } from "react";
import InsertDev from "../../InserirDado/components/InsertDev";
import styles from "./Dev.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Loading";

const Dev = () => {
  const [dados, setDados] = useState("");
  const [openModal, setOpenModal] = useState(styles.insertOff);
  const [load, setLoad] = useState(false);

  const nav = useNavigate();
  const url = "https://henriquedeveloper.com.br/PHP/admin/dev.php";

  useEffect(() => {
    setTimeout(() => {
      axios.get(url).then((res) => {
        setDados(res.data);
        setLoad(true);
      });
    }, 1000);
  }, []);

  const get = () => {
    setTimeout(() => {
      axios.get(url).then((res) => {
        setDados(res.data);
        setLoad(true);
      }, 1000);
    });
  };

  const open = () => {
    setOpenModal(styles.insert);
  };

  const close = () => {
    setOpenModal(styles.insertOff);
  };

  const edit = (e) => {
    nav(`/admin/editdev/${e}`);
  };

  const deletar = (e) => {
    axios.delete(
      `https://henriquedeveloper.com.br/PHP/admin/deletedev.php?id=${e}`,
      {
        titulo: "titulo",
        descricao: "descricao",
      }
    );
    setTimeout(() => {
      axios.get(url).then((res) => {
        setDados(res.data);
        setLoad(true);
      });
    }, 1000);
  };
  return (
    <>
      <div className={styles.dev}>
        <InsertDev mod={openModal} close={close} get={get} />
        <h1>Desenvolvimento</h1>
        <button onClick={open} className={styles.bt}>
          Adicionar Elemento
        </button>
      </div>
      <div className={styles.infos}>
        {dados
          ? dados.map((d) => {
              return (
                <div key={d.id} className={styles.dados}>
                  <div className={styles.dadosInfo}>
                    <h2>{d.titulo}</h2>
                    <p>{d.descricao}</p>
                  </div>
                  <div className={styles.icons}>
                    <button
                      onClick={() => edit(d.id)}
                      className={styles.btIcon}
                    >
                      <FaEdit className={styles.edit} />
                    </button>
                    <button
                      onClick={() => deletar(d.id)}
                      className={styles.btIcon}
                    >
                      <AiFillDelete className={styles.delete} />
                    </button>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
      {!load ? <Loading /> : ""}
    </>
  );
};

export default Dev;
