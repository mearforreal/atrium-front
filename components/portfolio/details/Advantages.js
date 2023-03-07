import React from "react";
import Heading from "../../shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import AdvantageItem from "../../about/AdvantageItem";
import styles from "../../../styles/portfolio/Portfolio.module.scss";

const Advantages = ({ projectInfo }) => {
  return (
    <div className={styles.portfolioDetails_advantage}>
      <Heading
        h2={"ПрЕИМУЩЕСТВА"}
        caption={"О ПРОЕКТЕ"}
        isDarkBg={false}
        p={projectInfo.advantage_desc_RU}
      />
      <div
        className={"wrapper" + " " + styles.portfolioDetails_advantage_cards}
      >
        <Swiper
          breakpoints={{
            1600: {
              slidesPerView: 4,
            },

            1100: {
              slidesPerView: 3,
            },

            610: {
              slidesPerView: 2,
            },

            280: {
              slidesPerView: 1,
            },
          }}
          slidesPerView={"auto"}
          spaceBetween={30}
        >
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/advantages/icon-" + (0 + 1) + ".svg"}
              title={"Расположение"}
              description={projectInfo.advantage_addressRU}
              additionaClass={"white_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/advantages/icon-" + (0 + 2) + ".svg"}
              title={"стиль"}
              description={projectInfo.advantage_styleRU}
              additionaClass={"white_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/advantages/icon-" + (0 + 3) + ".svg"}
              title={"безопасность"}
              description={projectInfo.advantage_securityRU}
              additionaClass={"grey_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/advantages/icon-" + (0 + 4) + ".svg"}
              title={"архитектура"}
              description={projectInfo.advantage_architectRU}
              additionaClass={"grey_bg"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Advantages;
