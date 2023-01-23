import React from "react";
import styles from "../../styles/shared/BlockSliderItem.module.scss";
import Link from "next/link";
const BlockSliderItem = ({ img, additionalClass, p, link }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(37, 42, 70, 0.35), rgba(37, 42, 70, 0.35)),url(${img})`,
      }}
      className={styles.blockSliderItem + " " + additionalClass}
    >
      <p className="h4">{p}</p>
      <Link href={link}>Подробнее</Link>
    </div>
  );
};

export default BlockSliderItem;
