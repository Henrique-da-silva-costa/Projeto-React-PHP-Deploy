import styles from "./Projetos.module.css";
import cadastro from "../../img/cadastro.png";
import site from "../../img/site.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";

const Projetos = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: 0 }}>Meus projetos</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <article>
          <SwiperSlide className={styles.arti}>
            <div className="">
              <img src={site} alt="" />
            </div>
            <a href="https://24101999.github.io/test-front/" target="_blank">
              <button>Ver projeto</button>
            </a>
          </SwiperSlide>
          <SwiperSlide className={styles.arti}>
            <div className="">
              <img src={cadastro} alt="" />
            </div>
            <a
              href="https://henriquedeveloper.com.br/cadastrodeveiculo/"
              target="_blank"
            >
              <button>Ver projeto</button>
            </a>
          </SwiperSlide>
        </article>
      </Swiper>
    </>
  );
};

export default Projetos;
