import React, { useCallback, useRef, useState } from "react";
import styles from "../../styles/about/strategy/Strategy.module.scss";
import NextArrow from "../svg/NextArrow";
import PrevArrow from "../svg/PrevArrow";
import BlockSliderItem from "../shared/BlockSliderItem";
import { PREFIX_IMG } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
const data = [
  { id: 1, img: "image-", title: "elite life" },
  { id: 2, img: "image-", title: "kokjiek city" },
  { id: 3, img: "image-", title: "luxury life" },
  // { id: 4, img: "image-", title: "elite life" },
];

const Strategy = ({ projectData }) => {
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
    <div className={styles.strategy + " " + "main_container"}>
      {/* breadcrumbing */}
      <div className="breadcrumb"></div>
      {/* img */}

      <div className={styles.strategy_content}>
        <div className={styles.strategy_slider_container}>
          <div className={"arrows" + " " + styles.arrows}>
            <div onClick={handleNext}>
              <PrevArrow />
            </div>
            <div onClick={handlePrev}>
              <NextArrow />
            </div>
          </div>
          <div className={styles.strategy_slider + " " + "strategy_slider"}>
            <Swiper
              ref={sliderRef}
              spaceBetween={55}
              slidesPerView={"auto"}
              width={null}
              speed={800}
              loop={true}
              centeredSlides={true}
              breakpoints={{
                1440: {
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 1.8,
                },

                600: {
                  slidesPerView: 2,
                },

                280: {
                  slidesPerView: 1,
                },
              }}
              onSlideChange={(data) => {
                setPage(data.realIndex + 1);
              }}
            >
              {projectData?.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <BlockSliderItem
                    p={item.titleRU}
                    link={"/portfolio/" + item.slug}
                    img={PREFIX_IMG + item.bannerImage}
                    // additionalClass={
                    //   styles.blockOneSlider_item + " " + "blockOneSlider_item"
                    // }

                    additionalClass={
                      styles.slider_item + " " + "slider_item_strategy"
                      //  +
                      // " " +
                      // (index === data.length - 1
                      //   ? styles.slider_item_current
                      //   : styles.slider_item_non_current)
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={"page" + " " + styles.page}>
            <span style={{ marginRight: 5 }} className="page_current">
              {("0" + page).slice(-2)}
            </span>

            <span className="page_total"> / 04</span>
          </div>
        </div>

        {/* text */}

        <div className={styles.strategy_description}>
          <span className={`caption caption_dark`}>О НАШЕЙ КОМПАНИИ</span>
          <h2 className={`h2 h2_dark`}>СТРАТЕГИЯ</h2>
          <p className={`text_body text_body_dark`}>
            Чтобы достичь целей нашей стратегии, мы будем постоянно отслеживать
            инновационные строительные технологии, которые основаны на
            исключительной пригодности для условий выбранного региона. Также мы
            планируем использовать только качественные и износостойкие
            строительные материалы. Наше конкурентное преимущество будет
            достигнуто за счёт строгого баланса между применением современных
            технологий и постоянной оценки общей конъюнктуры рынка. Наши
            архитекторы при планировании будут стараться не нарушать общей
            городской архитектуры, органично вписываясь в инфраструктуру города.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
