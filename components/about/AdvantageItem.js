import React from "react";
import styles from "../../styles/about/Advantages.module.scss";
import Image from "next/image";

const AdvantageItem = ({ title, icon, description, additionaClass }) => {
  return (
    <div className={styles.advantageItem + " " + additionaClass}>
      <img src={icon} alt="icon" />
      <h6 className="h6">{title}</h6>
      <p className="b2">{description}</p>
    </div>
  );
};

export default AdvantageItem;
