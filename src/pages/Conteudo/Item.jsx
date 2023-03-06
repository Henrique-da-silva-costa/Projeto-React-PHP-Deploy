import styles from "./Item.module.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Loading from "../../Loading";
const Item = () => {
  const [dados, setDados] = useState();
  const [load, setload] = useState(false);
  let param = useParams();
  let id = param.id;

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`https://henriquedeveloper.com.br/PHP/admin/imgunica.php?id=${id}`)
        .then((res) => {
          setDados(res.data);
          setload(true);
        });
    }, 1000);
  }, []);

  return (
    <div
      className={styles.dad}
      style={{ backgroundImage: `url(${dados ? dados[0].img : ""})` }}
    >
      <div className={styles.block}>
        {dados ? (
          <div className={styles.item}>
            <img src={dados[0].img} alt="" />
            <h1>{dados[0].titulo}</h1>
            <p>{dados[0].descricao}</p>
          </div>
        ) : (
          ""
        )}
        {!load ? <Loading /> : ""}
      </div>
    </div>
  );
};

export default Item;
