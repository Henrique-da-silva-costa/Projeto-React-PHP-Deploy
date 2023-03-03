import styles from "./Conteudo.module.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Slide from "./components/slide/Slide";
import Info from "./components/info/Info";
import ModalHome from "./components/modal/ModalHome";
import { useEffect, useState } from "react";
import InfoTech from "./components/infoTech/InfoTech";

// import Carrousell from "../../components/Carrousell";
function Conteudo() {
  return (
    <>
      <ModalHome />
      <Header />
      <section className={styles.DadConteudo}>
        <Info />
        <Slide />
        <InfoTech />
      </section>
      <Footer />
    </>
  );
}

export default Conteudo;
