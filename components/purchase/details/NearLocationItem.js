import React from "react";
import styles from "../../../styles/purchase/PurchaseDetails.module.scss";
import Foot from "../../../assets/purchase/foot.png";
import Car from "../../../assets/purchase/car.png";
import Image from "next/image";

const NearLocationItem = ({ item }) => {
  return (
    <div className={styles.nearLocation_item}>
      <div className={styles.nearLocation_item__time}>
        <p className="h3">{item?.minutes}</p>
        <span>мин.</span>
      </div>
      <div className={styles.nearLocation_item__adress}>
        <p className="text_body text_body_dark">{item?.addressRU}</p>
      </div>
      <div className={styles.nearLocation_item__distance}>
        <img
          width={16}
          height={16}
          src={item?.onFoot ? Foot : Car}
          alt="foot"
        />
        <hr />
        <div className={styles.nearLocation_item__distance_metric}>
          <p className="text_body text_body_dark">
            {item?.distance} <span>{item?.metric}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NearLocationItem;
