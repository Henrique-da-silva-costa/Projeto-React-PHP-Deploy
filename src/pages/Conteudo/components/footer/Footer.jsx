import styles from "./Footer.module.css";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navgate = useNavigate();
  return (
    <footer>
      <div className={styles.links}>
        <a href="https://github.com/24101999" target="_blank">
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
      </div>
      <div className={styles.email}>
        <AiOutlineMail />
        <p>
          <strong>henriquedasilvacosta@live.com</strong>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
