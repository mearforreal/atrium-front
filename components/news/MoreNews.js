import React, { useRef, useState } from "react";
import styles from "../../styles/news/MoreNews.module.scss";
import PrevArrow from "../svg/PrevArrow";
import NextArrow from "../svg/NextArrow";
import moreArrow from "../../assets/moreArrow.svg";
import bg from "../../assets/bg/bg1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { PREFIX_IMG } from "../../config";
import Link from "next/link";

const MoreNews = ({ moreNews, direction }) => {
  const sliderRef = useRef(null);

  const [page, setPage] = useState(1);
  return (
    <div className={styles.moreNews + " " + "moreNewsDetail"}>
      {direction == "vertical" ? (
        <h4 style={{ marginBottom: 40 }} className="h4">
          другие новости
        </h4>
      ) : null}

      <div
        className={
          "slider_mobile" +
          " " +
          (direction == "vertical" ? styles.slider_mobile_vertical : null)
        }
        style={{ marginBottom: 40 }}
      >
        <div className={"arrows" + " " + styles.arrows}>
          <div
            className={styles.arrows_prev}
            onClick={() => {
              if (!sliderRef.current) return;

              sliderRef.current.swiper.slidePrev();
            }}
          >
            <PrevArrow />
          </div>
          <div
            onClick={() => {
              if (!sliderRef.current) return;

              sliderRef.current.swiper.slideNext();
            }}
          >
            <NextArrow />
          </div>
        </div>

        <div className={"page" + " " + styles.page}>
          <span style={{ marginRight: 5 }} className="page_current">
            {(`${page <= 9 ? "0" : ""}` + page).slice(-2)}
          </span>

          <span className="page_total">
            {" "}
            /{" "}
            {(`${moreNews?.length <= 9 ? "0" : ""}` + moreNews?.length).slice(
              -2
            )}
          </span>
        </div>
      </div>
      <Swiper
        ref={sliderRef}
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={"auto"}
        speed={900}
        loop={true}
        width={null}
        direction={!!direction ? direction : "horizontal"}
        onSlideChange={(swiper) => {
          setPage(swiper.realIndex + 1);
        }}
        breakpoints={{
          805: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
          280: {
            slidesPerView: 1,
          },
        }}
      >
        {moreNews?.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={
                styles.moreNews_card +
                " " +
                (direction == "vertical" ? styles.moreNews_card_vertical : "")
              }
            >
              <Image
                width={260}
                height={287}
                src={PREFIX_IMG + item.img}
                alt="bg"
              />
              <p>Начато строительство нового ЖК комфорт класса Kokjiek city</p>
              <Link href={"/news/" + item.id} className="caption caption_light">
                Подробнее <img src={moreArrow.src} alt="img" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MoreNews;
