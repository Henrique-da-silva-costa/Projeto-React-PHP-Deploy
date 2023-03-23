import axios from "axios";
import { useState } from "react";
import styles from "./Home.module.css";
import { Await, Link, redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");
  const [msg, setMsg] = useState("");
  const url = "https://henriquedeveloper.com.br/PHP/";

  const [dados, setDados] = useState();

  const el = [dados];

  const userDdados = {
    email: email,
    senha: senha,
  };

  let nav = useNavigate();
  const submit = async (ev) => {
    ev.preventDefault();
    const auth = sessionStorage.getItem("session");
    if (true) {
      setLogin("/admin");
    } else {
      setLogin("/");
    }
    const { data } = await axios.post(
      "https://henriquedeveloper.com.br/PHP/login/val.php",
      userDdados
    );
    sessionStorage.setItem("session", data);

    if (email == "" || senha == "") {
      setMsg("campo vazio");
      setEmail(styles.inputActive);
      setSenha(styles.inputActive);
      nav("/login");
    } else {
      nav("/admin");
    }
  };

  return (
    <div className={styles.home}>
      <h1>Login</h1>
      <div className={styles.formdiv}>
        <form onSubmit={submit}>
          <label>
            <span>E-mail</span>
            <input
              type="text"
              name="email"
              placeholder={msg}
              className={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              name="senha"
              placeholder={msg}
              className={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <Link to={"/cadastro"}>Cadastro</Link>
      </div>
    </div>
  );
};

export default Login;

// const { data } = await axios.get("https://henriquedeveloper.com.br/PHP/login/auth.php", {
//   headers: {
//     Authorization: auth,
//   },
// });
// console.log(data);
