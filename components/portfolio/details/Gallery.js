import React, { useCallback, useRef, useState } from "react";
import styles from "../../../styles/portfolio/details/Gallery.module.scss";
import navStyles from "../../../styles/shared/SubNav.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PREFIX_IMG } from "../../../config";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow } from "swiper";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";

const Gallery = ({ projectInfo, gallery_types }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const [galleryTypeIndex, setGalleryTypeIndex] = useState(1);

  // const checkGalliesTypeExistes = (gallery_types, projectInfoGalleries) => {
  //   gallery_types.filter((item) => {
  //     item,
  //   });
  // };

  //todo
  const findExternalImagesIndex = (index) => {
    let indexImage = projectInfo?.galleries.findIndex((gallery) => {
      return gallery?.gallery_type_id === index;
    });
    return indexImage === -1 ? 0 : indexImage;
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
    <div className={styles.gallery}>
      <div className="heading two_paragraph">
        <div>
          <span
            className={`caption caption_dark`}
          >{`ЖК ${projectInfo.titleRU}`}</span>
          <h2 className={`h2 h2_dark`}>ГАЛЕРЕЯ</h2>
        </div>
        <div className="two_paragraph_text">
          <p className={`text_body h2_dark`}>
            Этот четырех-ступенчатый текст - “текст-рыба”. Опишите здесь кратко
            ЖК. Желательно не слишком длинно. Этот текст - прямое продолжение
            прошлого текста, который находится слева.
          </p>
          <p className={`text_body h2_dark`}>
            Этот четырех-ступенчатый текст - “текст-рыба”. Опишите здесь кратко
            ЖК. Желательно не слишком длинно. Этот текст - прямое продолжение
            прошлого текста, который находится слева.
          </p>
        </div>
      </div>
      <div className={styles.gallery_images}>
        <ul className={navStyles.subNav}>
          {gallery_types?.map((item, index) => (
            <li
              key={index + "img_gallery"}
              className={
                item.id === galleryTypeIndex ? navStyles.subNav_active : ""
              }
              onClick={() => setGalleryTypeIndex(item.id)}
            >
              {item.titleRU}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.gallery_slider}>
        <div className={styles.slider_utils + " " + "wrapper"}>
          <div className={"page" + " " + styles.page}>
            <span style={{ marginRight: 5 }} className="page_current">
              {(`${page <= 9 ? "0" : ""}` + page).slice(-2)}
            </span>

            <span className="page_total">
              {" "}
              /{" "}
              {(
                `${
                  projectInfo?.galleries[
                    findExternalImagesIndex(galleryTypeIndex)
                  ]?.img.length <= 9
                    ? "0"
                    : ""
                }` +
                projectInfo?.galleries[
                  findExternalImagesIndex(galleryTypeIndex)
                ]?.img.length
              ).slice(-2)}
            </span>
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

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5}
          ref={sliderRef}
          spaceBetween={55}
          speed={900}
          loop={true}
          lazy={{ loadPrevNext: true }}
          modules={[EffectCoverflow]}
          onSlideChange={(swiper) => {
            setPage(swiper.realIndex + 1);
          }}
        >
          {projectInfo?.galleries[
            findExternalImagesIndex(galleryTypeIndex)
          ]?.img?.map((item, index) => (
            <SwiperSlide key={index + "img"}>
              <div
                className={
                  styles.gallery_slider_item + " " + "gallery_slider_item"
                }
              >
                <img
                  width="930"
                  height="545"
                  src={PREFIX_IMG + item}
                  alt="slider"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <Swiper slidesPerView={4} spaceBetween={30}>
        
      </Swiper> */}
      </div>
    </div>
  );
};

export default Gallery;
