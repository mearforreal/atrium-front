import React from "react";
import styles from "../../styles/shared/BlockSliderItem.module.scss";
const BlockSliderItem = ({ img, additionalClass }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
      }}
      className={styles.blockSliderItem + " " + additionalClass}
    >
      <button type="button">Подробнее</button>
    </div>
  );
};

export default BlockSliderItem;
