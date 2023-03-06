import React from "react";
import Footer from "../pages/Conteudo/components/footer/Footer";
import Header from "../pages/Conteudo/components/header/Header";
import styles from "./About.module.css";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";

const About = () => {
  return (
    <div className={styles.about}>
      <Header />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  );
};

export default About;
