import React, { useContext } from "react";
import styles from "../../styles/purchase/Purchase.module.scss";
import Link from "next/link";
import { DataContext } from "../../context/DataContext";
import { numberWithCommas } from "../../utils/DateUtils";

const PurchaseCard = ({ data, isDarkBg, bg }) => {
  const settingContext = useContext(DataContext);
  let [setting, setSetting] = settingContext;
  return (
    <>
      <div
        className={styles.purchaseCard + " "}
        style={{ backgroundColor: bg }}
      >
        <h3 className={`h3 ${isDarkBg ? "h2_dark" : "h2_white"}`}>
          {data?.titleRU}
        </h3>
        <div
          className={
            styles.purchaseCard_content +
            " " +
            `${isDarkBg ? "h2_dark" : "h2_white"}`
          }
        >
          <div className={styles.purchaseCard_content_info}>
            <p className={`text_body`}>Цена/ м2</p>
            {/* от 1 100 000 ₸ ≈  $2 320 */}
            {data?.room_types[0]?.rooms[0]?.price ? (
              <span className="text_body">
                {" "}
                от{" "}
                {numberWithCommas(
                  Math.floor(data?.room_types[0]?.rooms[0]?.price)
                )}{" "}
                ₸ ≈{" "}
                {`$ ${numberWithCommas(
                  Math.floor(
                    data?.room_types[0]?.rooms[0]?.price / setting?.currency
                  )
                )}`}
              </span>
            ) : (
              <span
                style={{ textTransform: "capitalize" }}
                className="text_body"
              >
                уточнить в отделе продаж
              </span>
            )}
          </div>
          <div className={styles.purchaseCard_content_info}>
            <p className="text_body">Адрес</p>
            <span className="text_body">{data?.contact?.address}</span>
          </div>
        </div>
        <Link
          href={`/purchase/${data.slug}`}
          className={`btn_outline ${isDarkBg ? "" : " btn_outline_light"}`}
        >
          Подробнее
        </Link>
      </div>
      {/* <img src="" alt="" /> */}
    </>
  );
};

export default PurchaseCard;
