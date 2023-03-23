import styles from "./Sobre.module.css";
import img from "../../img/eu.jpg";
const Sobre = () => {
  return (
    <article>
      <h1>Sobre eu</h1>
      <div className={styles.sobre}>
        <img src={img} alt="" />
        <div className={styles.txt}>
          <h3>Quem sou eu</h3>
          <p>
            Olá meu nome é Henrique e desde criança sou apaixonado por
            tecnologia e hoje uso ela como trabalho
          </p>
        </div>
      </div>
      <div className={styles.trabalho}>
        <div className={styles.txt}>
          <h3>Conhecimentos</h3>
          <p>
            Tenho Conhecimentos em HTML, CSS , JavaScript , React , Vue , PHP,
            Laravel, Sql , BootStrap e também já trabalhei 1 ano com
            desenvolvimento web construindo sites a partir do zero usando 
            HTML/CSS/JavaScript/PHP
          </p>
        </div>
        <img src={img} alt="" />
      </div>
    </article>
  );
};

export default Sobre;
