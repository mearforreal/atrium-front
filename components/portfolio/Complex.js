import React, { useCallback, useRef, useState } from "react";
import Heading from "../shared/Heading";
import Image from "next/image";
import styles from "../../styles/portfolio/Portfolio.module.scss";
import Breadcumb from "../shared/Breadcumb";
import PrevArrow from "../svg/PrevArrow";
import NextArrow from "../svg/NextArrow";
import bg from "../../assets/bg/bg1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, EffectFade, Navigation, Pagination } from "swiper";
import { PREFIX_IMG } from "../../config";
import Link from "next/link";

const Complex = ({ projectData }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const breadcumbData = {
    current: {
      href: "/portfolio",
      title: "портфолио",
    },
    nav: [],
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <Breadcumb current={breadcumbData.current} />
      <div className={styles.portfolio_complex}>
        <Heading
          isDarkBg={false}
          caption={"О НАШЕЙ КОМПАНИИ"}
          h2="наши жилые комплексы"
          p="ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша
    цель - комфорт и хорошее настроение наших клиентов."
        />
        <div className={"wrapper" + " " + styles.portfolio_complex_container}>
          <Swiper
            ref={sliderRef}
            spaceBetween={55}
            slidesPerView={1}
            speed={900}
            loop={true}
            effect={"fade"}
            // lazy={{ loadPrevNext: true }}
            // modules={[EffectCoverflow]}
            onSlideChange={(swiper) => {
              setPage(swiper.realIndex + 1);
            }}
          >
            {projectData?.map((item) => (
              <SwiperSlide className={styles.slider} key={item.id}>
                <div
                  className={
                    styles.complex_slider +
                    " " +
                    styles.portfolio_complex_container
                  }
                >
                  <Image
                    src={PREFIX_IMG + item.bannerImage}
                    width={535}
                    height={501}
                    alt="slide"
                    className={styles.complexSlider_mainImg}
                  />
                  <div
                    className={styles.portfolio_complex_card_bg}
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                        PREFIX_IMG + item.bannerImage
                      })`,
                    }}
                  >
                    <div className={styles.complexSlider_card}>
                      <h3 className="h3">{item.titleRU}</h3>
                      <p className="text_body">{item.descRU}</p>
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className="btn_outline"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>

                  <div className={styles.complexSlider_card_blur}>
                    <Image
                      width={635}
                      height={560}
                      alt="slide"
                      src={PREFIX_IMG + item.bannerImage}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={"page" + " " + styles.page}>
            <span style={{ marginRight: 5 }} className="page_current">
              {("0" + page).slice(-2)}
            </span>

            <span className="page_total"> / 04</span>
          </div>

          <div className={"arrows" + " " + styles.arrows}>
            <div onClick={() => handlePrev()}>
              <PrevArrow />
            </div>
            <div onClick={() => handleNext()}>
              <NextArrow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Complex;
