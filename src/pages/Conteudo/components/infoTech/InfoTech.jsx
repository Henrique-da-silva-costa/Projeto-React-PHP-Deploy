import styles from "./InfoTech.module.css";
import bg from "../../../../img/tech.jpg";

const InfoTech = () => {
  return (
    <>
      <article
        style={{ backgroundImage: `url(${bg})` }}
        className={styles.arti}
      >
        <div className={styles.item}>
          <h2>Desenvolvimento web</h2>
          <p>
            Desenvolvimento web é o termo utilizado para descrever o
            desenvolvimento de sites, na Internet ou numa intranet. O
            profissional que trabalha desenvolvendo websites pode ser um web
            designer ou um web developer
          </p>
        </div>
        <div className={styles.item}>
          <h2>Front End</h2>
          <p>
            Desenvolvimento web front-end é o desenvolvimento da interface
            gráfica do usuário de um site, através do uso de HTML, CSS e
            JavaScript, para que os usuários possam visualizar e interagir com
            esse site
          </p>
        </div>
        <div className={styles.item}>
          <h2>Back End</h2>
          <p>
            É o código que conecta a internet com o banco de dados, gerencia as
            conexões dos usuários e alimenta a aplicação web. O backend trabalha
            em conjunto com o frontend para entregar o produto para o usuário
            final.
          </p>
        </div>
      </article>
    </>
  );
};

export default InfoTech;
