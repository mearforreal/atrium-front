import React, { useRef, useState } from "react";
import styles from "../../../styles/home/oversea/Oversea.module.scss";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";
import OverseaSliderItem from "./OverseaSliderItem";
import { PREFIX_IMG } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
const data = [
  { id: 1, img: "image-", title: "Park Inn by Radisson Samsun" },
  { id: 2, img: "image-", title: "Dedeman Oskemen Tavros" },
  { id: 3, img: "image-", title: "Wyndham Tashkent" },
  { id: 4, img: "image-", title: "The Residence Istanbul Tavros" },
];
const OverseaSlider = ({ oversea, isDark }) => {
  const sliderOverseaRef = useRef(null);

  const [page, setPage] = useState(1);

  return (
    <div
      className={
        styles.overseaSlider + " " + isDark === true
          ? styles.overseaSlider_dark
          : ""
      }
    >
      <div className={styles.overseaSlider__pagination}>
        <div className={"slider_utils wrapper " + styles.slider_utils}>
          <div className={"page" + " " + styles.page}>
            <span style={{ marginRight: 5 }} className="page_current">
              {(`${page < 9 ? "0" : ""}` + page).slice(-2)}
            </span>

            <span className="page_total">
              {" "}
              /{" "}
              {(
                `${oversea?.overseaProjects?.length < 9 ? "0" : ""}` +
                oversea?.overseaProjects?.length
              ).slice(-2)}
            </span>
          </div>

          <div className={"arrows" + " " + styles.arrows}>
            <div
              className={styles.arrows_prev}
              onClick={() => {
                if (!sliderOverseaRef.current) return;

                sliderOverseaRef.current.swiper.slidePrev();
              }}
            >
              <PrevArrow />
            </div>
            <div
              onClick={() => {
                if (!sliderOverseaRef.current) return;

                sliderOverseaRef.current.swiper.slideNext();
              }}
            >
              <NextArrow />
            </div>
          </div>
        </div>
        {/* <div className="page">
          <span className="page_current">01 </span>
          <span className="page_total"> / 05</span>
        </div>
        <div className={styles.overseaSlider__pagination_arrows}>
          <PrevArrow />
          <NextArrow />
        </div> */}
      </div>
      <div className={styles.overseaSlider__slide}>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          slidesPerView="auto"
          speed={1000}
          loop={true}
          width={null}
          className={
            styles.overseaMain_slider +
            " " +
            "overseaMain_slider" +
            " " +
            `${isDark ? "overseaMain_slider_drak" : ""}`
          }
          onSlideChange={(swiper) => {
            setPage(swiper.realIndex + 1);
          }}
          ref={sliderOverseaRef}
          breakpoints={{
            734: {
              spaceBetween: 55,
              centeredSlides: true,
            },
          }}
          // effect={"fade"}
          // lazy={{ loadPrevNext: true }}
          // modules={[EffectCoverflow]}
        >
          {oversea?.overseaProjects
            ? oversea?.overseaProjects?.map((item, index) => (
                <SwiperSlide>
                  <OverseaSliderItem
                    key={item.id}
                    item={item}
                    img={PREFIX_IMG + item?.oversea_images[0]?.img}
                    current={index === 1}
                  />
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </div>
      {/* todo page num */}
    </div>
  );
};

export default OverseaSlider;
