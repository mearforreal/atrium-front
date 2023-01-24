import React, { useCallback, useRef, useState } from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Breadcumb from "../../components/shared/Breadcumb";
import { PurchaseCard } from "../../components/purchase";
import styles from "../../styles/purchase/Purchase.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import PrevArrow from "../../components/svg/PrevArrow";
import NextArrow from "../../components/svg/NextArrow";
import { PREFIX_IMG } from "../../config";

const breadcumbData = {
  current: {
    href: "/purchase",
    title: "приобрести",
  },
  nav: [],
};
const PurchaseData = [
  {
    title: "Elite life",
    price: "от 1 100 000 ₸ ≈  $2 320",
    address: "ул. Кажымухана, 105",
    bg: "#404040",
    isDarkBg: false,
  },
  {
    title: "Elite life 2",
    price: "от 820 000 ₸ ≈  $1 800",
    address: "ул. Кажымухана, 68A",
    bg: "#FFFFFF",
    isDarkBg: true,
  },
  {
    title: "KOKJIEK",
    price: "от 325 000 ₸≈ $690",
    address: "мкр. Кокжиек, ул. Шоссейная / ул. Бурундайская",
    bg: "#404040",
    isDarkBg: false,
  },
  {
    title: "Elite life",
    price: "от 1 500 000 ₸ ≈  $3 200",
    address: "Медеуский р-н, ул. Тайманова, 224Б",
    bg: "#293F8C",
    isDarkBg: false,
  },
];

const cardBg = (index) => {
  let data = { bg: "#404040", isDarkBg: false };
  if (index === 1) {
    data = { bg: "#FFFFFF", isDarkBg: true };
  }
  if (index === 3) {
    data = { bg: "#293F8C", isDarkBg: false };
  }

  return data;
};
const Purchase = ({ projectData }) => {
  const sliderRef = useRef(null);
  const [page, setPage] = useState(1);
  const [galleryTypeIndex, setGalleryTypeIndex] = useState(1);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className="">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="ПРиобрести"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl="/assets/bg/purchase.png"
        />
      </div>
      <Breadcumb current={breadcumbData.current} />
      <div
        className={styles.purchaseCard_container}
        style={{ marginTop: "35px" }}
      >
        {projectData?.map((item, index) => (
          <div key={index}>
            <div
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${
                  PREFIX_IMG + item.bannerImage
                })`,
              }}
              className={
                styles.purchaseCard_wrapper + " " + "purchaseCard_wrapper"
              }
            >
              <PurchaseCard
                data={item}
                bg={cardBg(index).bg}
                isDarkBg={cardBg(index).isDarkBg}
              />

              <Swiper
                className={styles.purchase_slider_wraper}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                // width={600}
                breakpoints={{
                  1349: {
                    slidesPerView: 1.8,
                  },

                  1200: {
                    slidesPerView: 1.5,
                  },

                  1192: {
                    slidesPerView: 1.3,
                  },

                  800: {
                    slidesPerView: 1.3,
                  },

                  280: {
                    slidesPerView: 1,
                  },
                }}
                ref={sliderRef}
                spaceBetween={50}
                speed={900}
                loop={true}
                onSlideChange={(swiper) => {
                  setPage(swiper.realIndex + 1);
                }}
              >
                {item?.galleries[0]?.img?.map((img) => (
                  <SwiperSlide key={img.id}>
                    <div className={styles.purchase_slider_item}>
                      <Image
                        width="600"
                        height="522"
                        src={PREFIX_IMG + img}
                        alt="slider"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div
                className={"page" + " " + styles.page + " " + styles.page_index}
              >
                <span style={{ marginRight: 5 }} className="page_current">
                  {(`${page < 9 ? "0" : ""}` + page).slice(-2)}
                </span>

                <span className="page_total">
                  {" "}
                  /{" "}
                  {(
                    `${item?.galleries[0]?.img?.length < 9 ? "0" : ""}` +
                    item?.galleries[0]?.img?.length
                  ).slice(-2)}
                </span>
              </div>

              {/* <div className={"arrows" + " " + styles.arrows}>
                <div onClick={handlePrev}>
                  <PrevArrow />
                </div>
                <div onClick={handleNext}>
                  <NextArrow />
                </div>
              </div> */}
              {/* <Swiper slidesPerView={4} spaceBetween={30}>
        
      </Swiper> */}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Purchase;
