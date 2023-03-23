import { useEffect, useState } from "react";
import styles from "./Cadastro.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { valEmail } from "../../regex";
import * as yup from "yup";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [val, setVal] = useState("");
  const [valEm, setValEm] = useState(false);
  const [dado, setDado] = useState();
  const [msg, setMsg] = useState("");
  const [msgEmail, setMsgEmail] = useState("");
  const navgate = useNavigate();
  const url = "https://henriquedeveloper.com.br/PHP/login/insert.php";

  const posted =() =>{
    const data = {
      senha,
      email,
    };
    axios.post(url, data).then((res)=>{
      console.log(res.data)
    });
  }
  const submit = (e) => {
    e.preventDefault();
    const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (senha.length < 6) {
      setMsg("a senha deve ter no minimo 6 carateres");
      setEmail(styles.inputactive);
      setSenha(styles.inputactive);
      axios.post(url, { "": "" });
    } 
    else if (!email || !senha ) {
      setVal("campo vazio");
      setEmail(styles.inputactive);
      setSenha(styles.inputactive);
      navgate("/cadastro");
    }
   else if (!regEx.test(email) && !senha.length < 6) {
      axios.post(url, { "": "" });
      navgate("/cadastro");
      setMsgEmail("Tipo de E-mail invalido ou e-mail já existente");
    } 
    else{
      posted()
      setMsg('');
      navgate("/login")
    } 
  };


  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      <div className={styles.form}>
        <span>{msg}</span>
        <span>{msgEmail}</span>
        <form onSubmit={submit}>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              required
              name="email"
              placeholder={val}
              className={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="text"
              name="senha"
              placeholder={val}
              className={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button type="submit" >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
