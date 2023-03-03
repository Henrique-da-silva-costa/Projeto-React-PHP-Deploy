import styles from "./Slide.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide, loop } from "swiper/react";
import "swiper/css/navigation";
// import { loop } from "swiper";
import "swiper/css";
// import "swiper/css/loop";
const Slide = () => {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:1999/admin/imagens.php").then((res) => {
      setDados(res.data);
    });
  }, []);

  let nav = useNavigate();

  const item = (e) => {
    nav(`/${e}`);
  };

  return (
    <article>
      <div style={{ maxWidth: "100%" }} className="">
        <Swiper spaceBetween={300} slidesPerView={1} loop={true}>
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
        </Swiper>
      </div>
    </article>
  );
};

export default Slide;
