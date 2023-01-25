import React, { useRef, useState } from "react";
import styles from "../../../styles/home/gallery/Gallery.module.scss";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { PREFIX_IMG } from "../../../config";
const Gallery = ({ projectData }) => {
  const [page, setPage] = useState(1);
  const sliderRef = useRef(null);
  const findIndex = (id) => {
    let index = projectData.findIndex((item) => {
      return item.id === id;
    });

    return index === -1 ? 0 : index;
  };

  const [currentId, setCurrentId] = useState(1);
  return (
    <div className={styles.gallery + " " + "home_gallery"}>
      {" "}
      {/* <div className={styles.gallery_page}>
        <div className="page">
          <span className="page_current">01 </span>
          <span className="page_total"> / 10</span>
        </div>
      </div> */}
      <div className={styles.gallery_arrow_text_wrapper}>
        <div className={styles.gallery_text}>
          <div>
            <span className="caption caption_light">О НАШИХ ЖК</span>
            <h2 className="h2 h2_dark">галерея</h2>
          </div>
          <div className={styles.gallery_text_container}>
            {projectData?.map((item) => (
              <h6
                onClick={() => {
                  setCurrentId(item.id);
                }}
                className={
                  "h6" +
                  " " +
                  (item.id === currentId ? styles.gallery_active : "")
                }
              >
                {item.titleRU}
              </h6>
            ))}
          </div>
        </div>
        {/* <div className={styles.gallery_arrows}>
          <PrevArrow />
          <NextArrow />
        </div> */}
      </div>
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={"auto"}
        breakpoints={{
          // 1920: {
          //   slidesPerView: 3,
          // },
          // 1440: {
          //   slidesPerView: 2.5,
          // },
          1335: {
            slidesPerView: 2,
          },
          990: {
            slidesPerView: 1.5,
          },
          280: {
            slidesPerView: 1,
          },
        }}
        width={null}
        // dir="ltr"
        speed={900}
        loop={true}
        className={styles.homeGallery}
        // effect={"fade"}
        onSlideChange={(swiper) => {
          setPage(swiper.realIndex + 1);
        }}
      >
        {projectData[findIndex(currentId)]?.galleries[0]?.img?.map((item) => (
          <SwiperSlide>
            <Image
              alt="gallery"
              width={637}
              height={625}
              src={PREFIX_IMG + item}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={"slider_utils wrapper " + styles.slider_utils}>
        <div className={"page" + " " + styles.page}>
          <span style={{ marginRight: 5 }} className="page_current">
            {(`${page < 9 ? "0" : ""}` + page).slice(-2)}
          </span>

          <span className="page_total">
            {" "}
            /{" "}
            {(
              `${
                projectData[findIndex(currentId)]?.galleries[0]?.img?.length < 9
                  ? "0"
                  : ""
              }` + projectData[findIndex(currentId)]?.galleries[0]?.img?.length
            ).slice(-2)}
          </span>
        </div>

        <div className={"arrows" + " " + styles.arrows}>
          <div
            className={styles.arrows_prev}
            onClick={() => {
              if (!sliderRef.current) return;

              sliderRef.current.swiper.slideNext();
            }}
          >
            <PrevArrow />
          </div>
          <div
            onClick={() => {
              if (!sliderRef.current) return;

              sliderRef.current.swiper.slidePrev();
            }}
          >
            <NextArrow />
          </div>
        </div>
      </div>
      {/* <img src="/assets/img/gallery/image_main.png" alt="image_main" /> */}
    </div>
  );
};

export default Gallery;
