import React from "react";
import styles from "../../../styles/home/oversea/Oversea.module.scss";
import Link from "next/link";

export const OverseaSliderItem = ({ img, current, item }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(37, 42, 70, 0.35), rgba(37, 42, 70, 0.35)), url(${img})`,
        }}
        className={styles.overseaSlider_Item + " " + "overseaSlider_Item"}
        // className={
        //   current
        //     ? styles.overseaSlider_Item_current
        //     : styles.overseaSlider_Item
        // }
      >
        <>
          {/* <div className={styles.overseaSlider_Item_current_back}></div> */}
          <div
            style={{
              background: `linear-gradient(0deg, rgba(37, 42, 70, 0.35), rgba(37, 42, 70, 0.35))`,
            }}
            className={styles.overseaSlider_Item_current_img}
          >
            <div
              className={
                styles.overseaSlider_Item_current_img_more +
                " overseaSlider_Item_current_img_more"
              }
            >
              <p className="h5">{item.title}</p>
              <Link
                href={`/oversea#${item.id}`}
                target={"_blank"}
                className="btn_primary"
              >
                Подробнее
              </Link>
            </div>
          </div>
        </>
        {/* {current ? (
          <>
            <div className={styles.overseaSlider_Item_current_back}></div>
            <div
              style={{
                background: `linear-gradient(0deg, rgba(37, 42, 70, 0.35), rgba(37, 42, 70, 0.35)), url(${img})`,
              }}
              className={styles.overseaSlider_Item_current_img}
            >
              <div className={styles.overseaSlider_Item_current_img_more}>
                <h5 className="h5">{item.titleRU}</h5>
                <button className="btn_primary">Подробнее</button>
              </div>
            </div>
          </>
        ) : null} */}
      </div>
    </>
  );
};

export default OverseaSliderItem;
