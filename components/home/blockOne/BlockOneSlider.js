import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/home/blockOne/BlockOneSlider.module.scss";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";
import BlockSliderItem from "../../shared/BlockSliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Space } from "@mantine/core";
import { useDataContext } from "../../../context/DataContext";
import { PREFIX_IMG } from "../../../config";

const data = [
  { id: 1, img: "image-", title: "elite life" },
  { id: 2, img: "image-", title: "kokjiek city" },
  { id: 3, img: "image-", title: "luxury life" },
  { id: 4, img: "image-", title: "elite life" },
];

const BlockOneSlider = ({ projectData }) => {
  // const [projects, setProjects] = useDataContext();
  // useEffect(() => {
  //   console.log(projects);

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
    <div className={styles.blockOneSlider}>
      <div className={styles.blockOneSlider__pagination}>
        <div className={styles.blockOneSlider__pagination_arrows}>
          <div onClick={handlePrev}>
            <PrevArrow />
          </div>
          <div onClick={handleNext}>
            <NextArrow />
          </div>
        </div>
        <div className="page">
          <span style={{ marginRight: 5 }} className="page_current">
            {("0" + page).slice(-2)}
          </span>

          <span className="page_total"> / 04</span>
        </div>
      </div>
      <div className={styles.blockOneSlider__slide + " " + "blockOneSlider"}>
        <Swiper
          ref={sliderRef}
          spaceBetween={55}
          slidesPerView={"auto"}
          speed={800}
          loop={true}
          breakpoints={{
            804: {
              slidesPerView: 3,
            },

            535: {
              slidesPerView: 2,
            },

            280: {
              slidesPerView: 1,
            },
          }}
          // lazy={{ loadPrevNext: true }}
          onSlideChange={(data) => {
            setPage(data.realIndex + 1);
          }}
        >
          {projectData?.map((item, index) => (
            <SwiperSlide key={item.id}>
              <BlockSliderItem
                img={PREFIX_IMG + item.bannerImage}
                additionalClass={
                  styles.blockOneSlider_item + " " + "blockOneSlider_item"
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlockOneSlider;
