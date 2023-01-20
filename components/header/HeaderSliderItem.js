import React from "react";
import styles from "../../styles/header/HeaderSliderItem.module.scss";
import Image from "next/image";
const HeaderSliderItem = ({ img, title }) => {
  return (
    <div className={styles.header_slider_item}>
      <div className={styles.header_slider_item__container}>
        <img src={img} alt={"img"} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default HeaderSliderItem;
