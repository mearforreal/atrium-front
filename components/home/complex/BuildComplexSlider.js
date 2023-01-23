import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/home/complex/Complex.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import NextArrow from "../../svg/NextArrow";
import PrevArrow from "../../svg/PrevArrow";
import { PREFIX_IMG } from "../../../config";
import Link from "next/link";

const data = [
  { id: 1, img: "image-", title: "elite life" },
  { id: 2, img: "image-", title: "kokjiek city" },
  { id: 3, img: "image-", title: "luxury life" },
  { id: 4, img: "image-", title: "elite life" },
];
const BuildComplexSlider = ({ projectData }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);

  const [cardInfoIndex, setCardInfoIndex] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const onNavPrev = () => {
    if (cardInfoIndex === 0) {
      setCardInfoIndex(projectData.length - 1);
    } else {
      setCardInfoIndex(cardInfoIndex - 1);
    }
  };

  const onNavNext = () => {
    if (cardInfoIndex === projectData.length - 1) {
      setCardInfoIndex(0);
    } else {
      setCardInfoIndex(cardInfoIndex + 1);
    }
  };

  return (
    <div className={styles.buildComplexSlider + " " + "buildComplexSlider"}>
      <div className={styles.slider_utils + " " + "wrapper"}>
        <div className={"page" + " " + styles.page}>
          <span style={{ marginRight: 5 }} className="page_current">
            {("0" + page).slice(-2)}
          </span>

          <span className="page_total"> / 04</span>
        </div>

        <div className={"arrows" + " " + styles.arrows}>
          <div onClick={handlePrev}>
            <PrevArrow />
          </div>
          <div onClick={handleNext}>
            <NextArrow />
          </div>
        </div>
      </div>

      <div
        // style={{
        //   backgroundImage: ` url(${
        //     PREFIX_IMG + projectData[cardInfoIndex]?.bannerImage
        //   })`,
        // }}
        className=""
      >
        <div className={styles.buildComplexSlider_card_current}>
          <div className={styles.buildComplexSlider_card_container}>
            <h3 className="h3">{projectData[cardInfoIndex]?.titleRU}</h3>
            <p className="text_body">{projectData[cardInfoIndex]?.descRU}</p>
            <Link
              href={"/portfolio/" + projectData[cardInfoIndex]?.slug}
              className="btn_outline"
            >
              Подробнее
            </Link>
          </div>
        </div>
      </div>

      {/* 
      <div className={styles.buildComplexSlider_wrapper}> */}

      <>
        <Swiper
          ref={sliderRef}
          spaceBetween={55}
          slidesPerView={"auto"}
          className={styles.buildComplexSlider_swiper}
          breakpoints={{
            950: {
              slidesPerView: 1.5,
            },

            280: {
              slidesPerView: 1,
            },
          }}
          speed={900}
          loop={true}
          onInit={() => {
            setCardInfoIndex(0);
          }}
          lazy={{ loadPrevNext: true }}
          onNavigationNext={onNavNext}
          onNavigationPrev={onNavPrev}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex > swiper.previousIndex) {
              onNavNext();
            } else {
              onNavPrev();
            }
            setPage(swiper.realIndex + 1);
          }}
        >
          {projectData?.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={
                  styles.buildComplexSlider_card +
                  " " +
                  "buildComplexSlider_card"
                }
              >
                <img src={PREFIX_IMG + item.bannerImage} alt="slider" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>

      {/* </div> */}
    </div>
  );
};

export default BuildComplexSlider;
