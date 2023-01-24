import React, { createRef, useCallback, useRef, useState } from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Breadcumb from "../../components/shared/Breadcumb";
import Footer from "../../components/footer/Footer";
import breadcumbStyles from "../../styles/breadcumb/Breadcumb.module.scss";
import backArrow from "../../assets/backArrow.svg";
import Link from "next/link";
import Image from "next/image";
import OverseaBlock from "../../components/oversea/OverseaBlock";
import styles from "../../styles/oversea/Oversea.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../../components/shared/Heading";
import PrevArrow from "../../components/svg/PrevArrow";
import NextArrow from "../../components/svg/NextArrow";
import { PREFIX_IMG } from "../../config";

const breadcumbData = {
  current: {
    href: "/porfolio",
    title: "портфолио",
  },
  nav: [],
};
const OverSeaTavous = ({ oversea }) => {
  const sliderRef = useRef([]);
  const [page, setPage] = useState(1);
  sliderRef.current = oversea?.overseaProjects?.map(
    (element, i) => sliderRef.current[i] ?? createRef()
  );
  const [currentId, setCurrentId] = useState(0);

  const [cardInfoIndex, setCardInfoIndex] = useState(0);

  const onNavPrev = (item) => {
    if (cardInfoIndex === 0) {
      setCardInfoIndex(item?.oversea_images.length - 1);
    } else {
      setCardInfoIndex(cardInfoIndex - 1);
    }
  };

  const onNavNext = (item) => {
    if (cardInfoIndex === item?.oversea_images.length - 1) {
      setCardInfoIndex(0);
    } else {
      setCardInfoIndex(cardInfoIndex + 1);
    }
  };

  const handleSubNavClick = (id) => {
    setCurrentId(id);
  };

  const filterProject = (item) => {
    if (currentId !== 0) {
      return item.oversea_type_id === currentId;
    }
    return item;
  };
  return (
    <div className="main_bg">
      {" "}
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="tavros group"
          desc={
            "Каждый инвестиционный проект группы «Таврос» – результат тесного сотрудничества с лучшими местными и международными брендами. Основным принципом работы компании является осуществление разнообразных инновационных проектов, отличающихся уникальностью и надежностью."
          }
          bgUrl="/assets/bg/oversea.png"
        />
      </div>
      <>
        <div
          className={
            "wrapper d-flex breadcumb_wrapper " + breadcumbStyles.breadcumb
          }
        >
          <div className={breadcumbStyles.breadcumb__container}>
            <div className={breadcumbStyles.breadcumb__left}>
              <div className={breadcumbStyles.breadcumb__home}>
                <Image src={backArrow} alt="backArrow" />
                <Link href={"/"}> главная </Link>
              </div>
              <span className={breadcumbStyles.breadcumb__current}>
                <Link href={breadcumbData.current?.href || ""}>
                  {" "}
                  {breadcumbData.current?.title}{" "}
                </Link>
                <span className={breadcumbStyles.breadcumb__current_dot} />
              </span>
            </div>
            <div className={breadcumbStyles.breadcumb__main}>
              <ul>
                <li onClick={() => handleSubNavClick(0)}>
                  <span className={currentId === 0 && "breadcumb_active"}>
                    ВСЕ
                  </span>
                  {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                </li>
                {oversea?.overseaTypes?.map((item) => (
                  <li key={item.id} onClick={() => handleSubNavClick(item.id)}>
                    <span
                      className={item.id === currentId && "breadcumb_active"}
                    >
                      {item?.titleRU}
                    </span>
                    {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "unset" }}
          className={breadcumbStyles.breadcumb__mainBtn}
        >
          <ul>
            <li
              className={currentId === 0 ? "btn_primary" : "btn_outline"}
              onClick={() => handleSubNavClick(0)}
            >
              <span className={currentId === 0 && "breadcumb_active"}>ВСЕ</span>
              {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
            </li>
            {oversea?.overseaTypes?.map((item, index) => (
              <li
                className={
                  item.id === currentId ? "btn_primary" : "btn_outline"
                }
                key={item.id}
                onClick={() => handleSubNavClick(item.id)}
              >
                <span>{item?.titleRU}</span>
                {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </>
      <div className={styles.oversea}>
        {oversea?.overseaProjects.filter(filterProject)?.map((item, index) => (
          <OverseaBlock item={item} sliderRef={sliderRef} index={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OverSeaTavous;
