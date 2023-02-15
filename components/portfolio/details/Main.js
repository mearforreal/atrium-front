import React, { useCallback, useRef, useState } from "react";
import styles from "../../../styles/portfolio/Portfolio.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { PREFIX_IMG } from "../../../config";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";
const Main = ({ projectInfo }) => {
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

  const findExternalImagesIndex = (index) => {
    let indexImage = projectInfo?.galleries.findIndex((gallery) => {
      return gallery?.gallery_type_id === index;
    });
    return indexImage === -1 ? 0 : indexImage;
  };

  return (
    <div
      className={
        styles.portfolioDetails_blockOne + " " + "portfolioDetails_blockOne"
      }
    >
      <div className={styles.portfolioDetails_desc}>
        <span className={`caption caption_light`}>О ПРОЕКТЕ</span>
        <h3 className="h3">{projectInfo?.titleRU}</h3>
        <p className="text_body">{projectInfo?.descRU}</p>
        <div className={styles.project_index}>
          {projectInfo?.project_index?.map((item) => (
            <div className={styles.project_index_container}>
              <p className="h3">{item?.number}</p>
              <span className="text_body text_body_dark">{item?.titleRU}</span>
            </div>
          ))}
        </div>
        <a
          href={projectInfo?.web_site_link}
          target={"_blank"}
          className="btn_outline"
        >
          перейти на сайт проекта
        </a>
      </div>

      <div
        className={
          styles.portfolioDetails_slider + " " + "portfolioDetails_slider"
        }
      >
        <div className={styles.slider_utils}>
          <div className={"page" + " " + styles.page_detail_blockOne}>
            <span style={{ marginRight: 5 }} className="page_current">
              {("0" + page).slice(-2)}
            </span>

            <span className="page_total">
              {" "}
              /{" "}
              {(
                `${
                  projectInfo?.galleries[findExternalImagesIndex(1)]?.img
                    ?.length <= 9
                    ? "0"
                    : ""
                }` +
                projectInfo?.galleries[findExternalImagesIndex(1)]?.img?.length
              ).slice(-2)}
            </span>
          </div>

          <div className={"arrows" + " " + styles.arrows_detail_blockOne}>
            <div onClick={handlePrev}>
              <PrevArrow />
            </div>
            <div onClick={handleNext}>
              <NextArrow />
            </div>
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          spaceBetween={55}
          slidesPerView={"auto"}
          breakpoints={{
            1062: {
              slidesPerView: 1.5,
            },

            700: {
              slidesPerView: 2,
            },

            280: {
              slidesPerView: 1,
            },
          }}
          speed={900}
          loop={true}
          lazy={{ loadPrevNext: true }}
          onSlideChange={(swiper) => {
            setPage(swiper.realIndex + 1);
          }}
        >
          {projectInfo?.galleries[findExternalImagesIndex(1)]?.img?.map(
            (item, index) => (
              <SwiperSlide key={index + "main"}>
                <div
                  className={
                    styles.portfolioDetails_slide_item +
                    " " +
                    "portfolioDetails_slide_item"
                  }
                >
                  <img
                    width="532"
                    height="493"
                    src={PREFIX_IMG + item}
                    alt="slider"
                  />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Main;
