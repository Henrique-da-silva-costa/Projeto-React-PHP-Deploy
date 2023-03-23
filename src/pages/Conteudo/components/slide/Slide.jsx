import styles from "./Slide.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide, loop } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import { loop } from "swiper";
import "swiper/css";
import Loading from "../../../../Loading";
import Vazio from "../../../../Vazio";
// import "swiper/css/loop";
const Slide = () => {
  const [dados, setDados] = useState('');
  const [removeLoading, setRemoveLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://henriquedeveloper.com.br/PHP/admin/imagens.php")
        .then((res) => {
          setDados(res.data);
          setRemoveLoading(true);
        });
    }, 800);
  }, []);

  let nav = useNavigate();

  const item = (e) => {
    nav(`/${e}`);
  };

  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", margin: 0 }}>
        Slide de imagens
      </h1>
      <article>
        <div style={{ maxWidth: "100%" }} className="">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={300}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {dados
              ? dados.map((d) => {
                  return (
                    <SwiperSlide key={d.id}>
                      <div className={styles.imgsSlide}>
                        <img src={d.img} alt="" />
                        <h2>{d.titulo}</h2>
                        <button onClick={() => item(d.id)}>Ver mais</button>
                      </div>
                    </SwiperSlide>
                  );
                })
              : ""}
              {dados.length === 0 && removeLoading ? <Vazio/>: ''}
            {!removeLoading ? <Loading /> : ""}
          </Swiper>
        </div>
      </article>
    </>
  );
};

export default Slide;
