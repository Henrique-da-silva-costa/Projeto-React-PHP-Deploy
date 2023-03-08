import { useState } from "react";
import styles from "./Cadastro.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [val, setVal] = useState();
  const navgate = useNavigate();
  const url = "https://henriquedeveloper.com.br/PHP/login/insert.php";

  const submit = (e) => {
    e.preventDefault();
    if (email == "" || senha == "") {
      setVal("campo vazio");
      setEmail(styles.inputactive);
      setSenha(styles.inputactive);
    }

    const data = {
      senha,
      email,
    };

    axios.post(url, data);
  };

  const post = () => {
    axios.post(url, {
      senha,
      email,
    });
    navgate("/login");
  };

  return (
    <div className={styles.cadastro}>
      <h1>Cadastro</h1>
      <div className={styles.form}>
        <form onSubmit={submit}>
          <label>
            <span>E-mail</span>
            <input
              type="text"
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
          <button type="submit" onClick={post}>
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
