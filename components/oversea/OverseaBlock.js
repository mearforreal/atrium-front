import React, { useCallback, useState } from "react";
import Heading from "../shared/Heading";
import styles from "../../styles/oversea/Oversea.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevArrow from "../svg/PrevArrow";
import NextArrow from "../svg/NextArrow";
import { PREFIX_IMG } from "../../config";
import Image from "next/image";

const OverseaBlock = ({ item, index, sliderRef, handlePrev, handleNext }) => {
  const [page, setPage] = useState(1);

  const [cardInfoIndex, setCardInfoIndex] = useState(0);

  const onNavPrev = (item) => {
    if (cardInfoIndex === 0) {
      setCardInfoIndex(item?.oversea_images?.length - 1);
    } else {
      setCardInfoIndex(cardInfoIndex - 1);
    }
  };

  const onNavNext = (item) => {
    if (cardInfoIndex === item?.oversea_images?.length - 1) {
      setCardInfoIndex(0);
    } else {
      setCardInfoIndex(cardInfoIndex + 1);
    }
  };

  return (
    <div id={item.id} className={styles.overseaBlock}>
      <Heading
        caption={item?.oversea_type?.titleRU}
        h2={item?.title}
        p={item?.short_descRU}
        isDarkBg={false}
      />

      <div className={"slider_utils wrapper " + styles.slider_utils}>
        <div className={"arrows" + " " + styles.arrows}>
          <div
            onClick={() => {
              if (!sliderRef.current[index].current) return;

              sliderRef.current[index].current.swiper.slidePrev();
            }}
          >
            <PrevArrow />
          </div>
          <div
            onClick={() => {
              if (!sliderRef.current[index].current) return;

              sliderRef.current[index].current.swiper.slideNext();
            }}
          >
            <NextArrow />
          </div>
        </div>

        <div className={"page" + " " + styles.page}>
          <span style={{ marginRight: 5 }} className="page_current">
            {(`${page < 9 ? "0" : ""}` + page).slice(-2)}
          </span>

          <span className="page_total">
            {" "}
            /{" "}
            {(
              `${item?.oversea_images?.length < 9 ? "0" : ""}` +
              item?.oversea_images?.length
            ).slice(-2)}
          </span>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className={styles.overseaBlock_card}>
          <h3 className="h3">{item?.oversea_images[cardInfoIndex]?.titleRU}</h3>
          <p className="text_body text_body_dark">
            {item?.oversea_images[cardInfoIndex]?.descRU}
          </p>
        </div>
        <Swiper
          spaceBetween={55}
          slidesPerView="auto"
          speed={900}
          loop={true}
          className={styles.overseaBlock_slider + " " + "overseaBlock_slider"}
          ref={sliderRef.current[index]}
          breakpoints={{
            1240: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },

            850: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
          }}
          // effect={"fade"}
          // lazy={{ loadPrevNext: true }}
          // modules={[EffectCoverflow]}
          onInit={() => {
            setCardInfoIndex(0);
          }}
          lazy={{ loadPrevNext: true }}
          onSlideChange={(swiper) => {
            if (swiper.activeIndex > swiper.previousIndex) {
              onNavNext(item);
            } else {
              onNavPrev(item);
            }
            setPage(swiper.realIndex + 1);
          }}
        >
          {item?.oversea_images?.map((item) => (
            <SwiperSlide className={styles.slider} key={item.id}>
              <div className={styles.overseaBlock_container}>
                <div className={styles.overseaBlock_img}>
                  <Image
                    alt="oversea"
                    width={480}
                    height={502}
                    src={PREFIX_IMG + item.img}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OverseaBlock;
