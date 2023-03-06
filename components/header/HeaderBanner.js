import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import insta from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import styles from "../../styles/header/HeaderBanner.module.scss";
import Image from "next/image";
import nextArrow from "../../assets/header/next-arrow.svg";
import prevArrow from "../../assets/header/prev-arrow.svg";
import HeaderSliderItem from "./HeaderSliderItem";
import { Swiper, SwiperSlide } from "swiper/react";
import RequestMainModal from "../request/modal/RequestMainModal";
import RequestIcon from "../request/RequestIcon";
import { DataContext } from "../../context/DataContext";

// import dynamic from "next/dynamic";

// const elitLife = dynamic(() => import("../../assets/elit.mp4"), {
//   loading: () => "Loading...",
// });

const slider_data = [
  { id: 1, img: "header-slider-", title: "Более 1500 довольных клиентов" },
  { id: 2, img: "header-slider-", title: "831 квартир в строительстве" },
  { id: 3, img: "header-slider-", title: "Строим 4 ЖК" },
  { id: 4, img: "header-slider-", title: "Построено 7 объектов" },
];
const HeaderBanner = ({
  titleSize,
  bgUrl,
  title,
  desc,
  is_home,
  is_two_line,
  is_video,
  video_url,
}) => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const [opened, setOpened] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   if (!!videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, []);

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
          backgroundImage: `linear-gradient(107.96deg, rgba(0, 3, 75, 0.35) 0%, rgba(55, 16, 16, 0.42) 100%),url("${bgUrl}")`,
        }}
      >
        <hr
          className={
            styles.hr_horizantal +
            " " +
            (is_two_line ? styles.hr_horizantal_home : null)
          }
        />
        <hr className={styles.hr_vertical} />
        <div className={styles.headerBanner__main_content}>
          <h5 style={!!titleSize ? { fontSize: titleSize } : null}>{title}</h5>
          <p>{desc}</p>
          <button
            type="button"
            className="btn_primary"
            onClick={() => setOpened(true)}
          >
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
                1500: {
                  slidesPerView: 3,
                },
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
        {/*   is_video,
  video_url, */}
        {is_video ? (
          <>
            <div className={styles.headerBanner__video}> </div>
            <video autoPlay muted loop id="myVideo">
              <source src={video_url} type="video/mp4" />
              {/* <source src={"/assets/elit.mp4"} type="video/mp4" /> */}
            </video>
          </>
        ) : (
          ""
        )}
      </div>
      <RequestMainModal opened={opened} setOpened={setOpened} />
      <RequestIcon setOpened={setOpened} />
    </div>
  );
};

export default HeaderBanner;
