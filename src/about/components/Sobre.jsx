import styles from "./Sobre.module.css";
import img from "../../img/eu.jpg";
const Sobre = () => {
  return (
    <article>
      <h1>Sobre mim</h1>
      <div className={styles.sobre}>
        <img src={img} alt="" />
        <div className={styles.txt}>
          <h3>Quem sou eu</h3>
          <p>
            Ola meu nome é Henrique e desde criança sou apaixonado por
            tecnologia e hoje uso ela como trabalho
          </p>
        </div>
      </div>
      <div className={styles.trabalho}>
        <div className={styles.txt}>
          <h3>Conhecimentos</h3>
          <p>
            Tenho Conhecimentos em HTML, CSS , JavaScript , React , Vue , PHP,
            Laravel, Sql , BootStrap e tmabem ja trabalhei 1 ano com
            desenvolvimento web construindo landing pages usando
            HTML/CSS/JavaScript
          </p>
        </div>
        <img src={img} alt="" />
      </div>
    </article>
  );
};

export default Sobre;
