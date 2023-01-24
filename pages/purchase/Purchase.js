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
import PurchaseRow from "../../components/purchase/PurchaseRow";

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

const Purchase = ({ projectData }) => {
  return (
    <div className=" main_bg">
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
        <div className="main_container">
          {projectData?.map((item, index) => (
            <PurchaseRow item={item} index={index} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Purchase;
