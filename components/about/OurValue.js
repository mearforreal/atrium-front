import React, { useCallback, useRef, useState } from "react";
import styles from "../../styles/about/OurValue.module.scss";
import Image from "next/image";
import PrevArrow from "../svg/PrevArrow";
import NextArrow from "../svg/NextArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { PREFIX_IMG } from "../../config";

const OurValue = ({ projectData }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const findIndex = (id) => {
    let index = projectData.findIndex((item) => {
      return item.id === id;
    });
    return index === -1 ? 0 : index;
  };
  const [currentId, setCurrentId] = useState(1);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
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
        <Swiper
          ref={sliderRef}
          spaceBetween={0}
          slidesPerView={1}
          speed={800}
          loop={true}
          centeredSlides={true}
          onSlideChange={(data) => {
            setPage(data.realIndex + 1);
            setCurrentId(data.realIndex);
          }}
        >
          {projectData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className={styles.ourValue_img_container}>
                <img src={PREFIX_IMG + item.bannerImage} alt="gallery" />
                {/* <img src={'/as'} /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={"page" + " " + styles.page}>
          <span className="page_current">01&nbsp;</span>
          <span className="page_total"> / 04</span>
        </div>
      </div>
      <div className={"arrows" + " " + styles.arrows}>
        <div onClick={handlePrev}>
          <PrevArrow />
        </div>
        <div onClick={handleNext}>
          <NextArrow />
        </div>
      </div>
      <div
        className={styles.ourValue_img_blur}
        style={{
          backgroundImage: `url("${
            PREFIX_IMG + projectData[currentId].bannerImage
          }")`,
        }}
      />
    </div>
  );
};

export default OurValue;
