import React from "react";
import Heading from "../../shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import AdvantageItem from "../../about/AdvantageItem";
import styles from "../../../styles/portfolio/Portfolio.module.scss";

const Advantages = ({ projectInfo }) => {
  return (
    <div className={styles.portfolioDetails_advantage}>
      <Heading
        h2={"ПрЕИМУЩСЕТВА"}
        caption={"О ПРОЕКТЕ"}
        isDarkBg={false}
        p={projectInfo.advantage_desc_RU}
      />
      <div
        className={"wrapper" + " " + styles.portfolioDetails_advantage_cards}
      >
        <Swiper
          breakpoints={{
            1190: {
              slidesPerView: 4,
            },

            900: {
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
              icon={"/assets/img/about/advantages/icon-" + (0 + 1) + ".svg"}
              title={"Расположение"}
              description={projectInfo.advantage_addressRU}
              additionaClass={"white_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/about/advantages/icon-" + (0 + 1) + ".svg"}
              title={"Расположение"}
              description={projectInfo.advantage_addressRU}
              additionaClass={"white_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/about/advantages/icon-" + (0 + 1) + ".svg"}
              title={"Расположение"}
              description={projectInfo.advantage_addressRU}
              additionaClass={"grey_bg"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <AdvantageItem
              icon={"/assets/img/about/advantages/icon-" + (0 + 1) + ".svg"}
              title={"Расположение"}
              description={projectInfo.advantage_addressRU}
              additionaClass={"grey_bg"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Advantages;
