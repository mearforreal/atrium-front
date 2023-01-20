import React, { useCallback, useRef, useState } from "react";

import insta from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import styles from "../../styles/header/HeaderBanner.module.scss";
import Image from "next/image";
import nextArrow from "../../assets/header/next-arrow.svg";
import prevArrow from "../../assets/header/prev-arrow.svg";
import HeaderSliderItem from "./HeaderSliderItem";
import { Swiper, SwiperSlide } from "swiper/react";

const slider_data = [
  { id: 1, img: "header-slider-", title: "Более 1500 довольных клиентов" },
  { id: 2, img: "header-slider-", title: "831 квартир в строительстве" },
  { id: 3, img: "header-slider-", title: "Строим 4 ЖК" },
  { id: 4, img: "header-slider-", title: "Построено 7 объектов" },
];
const HeaderBanner = ({ bgUrl, title, desc }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={styles.headerBanner}>
      <nav className={styles.header__social}>
        <ul>
          <li>
            <a href={"qwe"}>
              {" "}
              <Image alt="insta" src={insta} />
              {/* <img src={insta} alt="insta" />{" "} */}
            </a>
          </li>
          <li>
            <a href={"qwe"}>
              <Image alt="facebook" src={facebook} />
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={styles.headerBanner__main}
        style={{
          backgroundImage: `linear-gradient(107.96deg, rgba(0, 3, 75, 0.35) 0%, rgba(55, 16, 16, 0.42) 100%),url("${bgUrl}")`,
        }}
      >
        <hr className={[styles.hr_horizantal]} />
        <hr className={styles.hr_vertical} />
        <div className={styles.headerBanner__main_content}>
          <h5>{title}</h5>
          <p>{desc}</p>
          <button type="button" className="btn_primary">
            Связаться с нами
          </button>
        </div>
        <div className={styles.headerBanner__sliders}>
          <div className={styles.headerBanner__sliders__top}>
            <div className={styles.headerBanner__sliders__arrows}>
              <div onClick={() => handlePrev()}>
                <Image
                  src={prevArrow}
                  alt="prevArrow"
                  className={styles.headerBanner__sliders__arrows_prev}
                />
              </div>

              <div onClick={() => handleNext()}>
                <Image
                  src={nextArrow}
                  alt="nextArrow"
                  className={styles.headerBanner__sliders__arrows_next}
                />
              </div>
            </div>

            <div className={styles.headerBanner__sliders__page}>
              <span className={styles.headerBanner__sliders__page_current}>
                {("0" + page).slice(-2)} &nbsp;
              </span>

              <span className={styles.headerBanner__sliders__page_total}>
                {" "}
                / 04
              </span>
            </div>
          </div>

          {/* content */}
          <div
            className={
              styles.headerBanner__sliders__content + " " + "header_swiper"
            }
          >
            <Swiper
              ref={sliderRef}
              spaceBetween={30}
              loop={true}
              // width={"auto"}
              slidesPerView={"auto"}
              breakpoints={{
                465: {
                  slidesPerView: 1.7,
                },

                280: {
                  slidesPerView: 1,
                },
              }}
              onSlideChange={(swiper) => {
                setPage(swiper.realIndex + 1);
              }}
            >
              {slider_data?.map((item, index) => (
                <SwiperSlide>
                  <HeaderSliderItem
                    key={item.id}
                    img={
                      "/assets/img/header-slider/" +
                      item.img +
                      (index + 1) +
                      ".svg"
                    }
                    title={item.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
