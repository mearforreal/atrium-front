import React, { useCallback, useContext, useRef, useState } from "react";

import insta from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import styles from "../../styles/header/HeaderBanner.module.scss";
import Image from "next/image";
import nextArrow from "../../assets/header/next-arrow.svg";
import prevArrow from "../../assets/header/prev-arrow.svg";
import HeaderSliderItem from "./HeaderSliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { DataContext } from "../../context/DataContext";

const slider_data = [
  { id: 1, img: "header-slider-", title: "Более 1500 довольных клиентов" },
  { id: 2, img: "header-slider-", title: "831 квартир в строительстве" },
  { id: 3, img: "header-slider-", title: "Строим 4 ЖК" },
  { id: 4, img: "header-slider-", title: "Построено 7 объектов" },
];
const HeaderBannerNews = ({ bgUrl, title, desc }) => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;
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
            <a target={"_blank"} href={setting?.insta}>
              {" "}
              <Image alt="insta" src={insta} />
              {/* <Image src={insta} alt="insta" />{" "} */}
            </a>
          </li>
          <li>
            <a target={"_blank"} href={setting?.facebook}>
              <Image alt="facebook" src={facebook} />
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={styles.headerBanner__main}
        style={{
          backgroundImage: `linear-gradient(107.96deg, rgba(0, 3, 72, 0.35) 0%, rgba(65, 0, 0, 0.42) 100%), url("${bgUrl}")`,
          backgroundSize: "100% 100%",
        }}
      >
        {/* <hr className={[styles.hr_horizantal]} /> */}
        <hr className={styles.hr_vertical} />
        <div
          className={styles.headerBanner__main_content}
          style={{ padding: "12% 2% 0% 5%" }}
        >
          <h5>{title}</h5>
          <p style={{ borderBottom: "1px solid #fff" }}>{desc}</p>
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
                <SwiperSlide key={item.id}>
                  <HeaderSliderItem
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

export default HeaderBannerNews;
