import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Modal = ({ modal, closed }) => {
  let param = useParams();
  let id = param.id;
  const [dados, setDados] = useState("");

  useEffect(() => {
    axios
      .get(`https://henriquedeveloper.com.br/PHP/admin/dadounico.php?id=${id}`)
      .then((res) => {
        setDados(res.data);
      });
  }, []);

  // const get = () => {
  //   axios
  //     .get(`https://henriquedeveloper.com.br/PHP/admin/dadounico.php?id=${id}`)
  //     .then((res) => {
  //       setDados(res.data);
  //     });
  //   closed();
  // };

  return (
    <div className={modal}>
      <button onClick={closed}>
        <AiOutlineCloseCircle />
      </button>
      <h1>Descrição</h1>
      {dados ? <p>{dados[0].descricao}</p> : ""}
    </div>
  );
};
export default Modal;
