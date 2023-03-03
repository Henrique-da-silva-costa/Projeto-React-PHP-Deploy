import styles from "./Item.module.css";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
const Item = () => {
  const [dados, setDados] = useState();

  let param = useParams();
  let id = param.id;

  useEffect(() => {
    axios
      .get(`https://henriquedeveloper.com.br/php/admin/imgunica.php?id=${id}`)
      .then((res) => {
        setDados(res.data);
      });
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
      </div>
    </div>
  );
};

export default Item;
