import React from "react";
import styles from "../../styles/about/OurValue.module.scss";
import Image from "next/image";
import PrevArrow from "../svg/PrevArrow";
import NextArrow from "../svg/NextArrow";

const OurValue = () => {
  return (
    <div className={styles.ourValue}>
      <div className={styles.ourValue_description}>
        <span className={`caption caption_dark`}>НАША КОНЦЕПЦИЯ</span>
        <h2 className={`h2 h2_dark`}>НАШИ ЦЕННОСТИ</h2>
        <p className={`text_body text_body_dark`}>
          Сплочённая команда единомышленников, которых объединяют общие
          ценности: Уважение к клиенту, командная работа, ответственность за
          результат, высокое качество и надежность, постоянное развитие.
        </p>
      </div>
      <div className={styles.ourValue_img}>
        <img src="/assets/img/gallery/image_main.png" alt="gallery" />
        {/* <Image src={'/as'} /> */}

        <div className={"page" + " " + styles.page}>
          <span className="page_current">01&nbsp;</span>
          <span className="page_total"> / 04</span>
        </div>
      </div>
      <div className={"arrows" + " " + styles.arrows}>
        <PrevArrow />
        <NextArrow />
      </div>

      <div className={styles.ourValue_img_blur} />
    </div>
  );
};

export default OurValue;
