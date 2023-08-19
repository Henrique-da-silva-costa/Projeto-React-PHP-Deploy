import styles from "./Footer.module.css";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Email from "../../../../email/Email";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState(styles.emx);

  const open = () => {
    setEmail(styles.em);
  };
  const closed = () => {
    setEmail(styles.emx);
  };

  const navgate = useNavigate();
  return (
    <footer>
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        MINHAS REDES DE CONTATO
      </h1>
      <div className={styles.links}>
        <a href="https://github.com/Henrique-da-silva-costa" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/henrique-da-silva-costa-7172521a2/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://wa.me/5544997070974" target="_blank">
          <BsWhatsapp />
        </a>
        <AiOutlineMail onClick={open} />
      </div>

      <Email email={email} closs={closed} />
    </footer>
  );
};
export default Footer;
