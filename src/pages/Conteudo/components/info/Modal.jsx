import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Modal = ({ modal, closed, res }) => {
  let param = useParams();
  let id = param.id;
  const [dados, setDados] = useState();

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
