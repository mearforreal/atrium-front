import React from "react";
import styles from "../../../styles/home/blockOne/BlockOneText.module.scss";

const BlockOneText = () => {
  return (
    <div className={styles.BlockOneText}>
      <div className={styles.BlockOneText_card__first}>
        <span className="caption">О НАШЕЙ КОМПАНИИ</span>
        <h2 className="h2 h2_dark">Atrium Plus сегодня</h2>
        <p>
          Строительная компания полного цикла. Atrium Plus – это компания,
          которая создана для воплощения нового образа жизни. Наши форматы жилья
          выходят за рамки того, что люди привыкли называть «квартирой» – и
          именно поэтому они призваны отвечать высоким запросам наших клиентов.
        </p>
      </div>
      <div className={styles.BlockOneText_card__second}>
        <span className="caption">О НАШЕЙ КОМПАНИИ</span>
        <h2 className="h2 h2_dark">наши традиции</h2>
        <p>
          Наша традиция - строить качественные дома, а наша цель - комфорт и
          хорошее настроение наших клиентов. Поэтому мы предлагаем больше, чем
          покупку квартиры, мы создаем стиль жизни, который включает в себя
          удобство, безопасность и развитую инфраструктуру, позволяющую человеку
          чувствовать себя комфортно не только в собственной квартире, но и за
          её пределами.
        </p>
      </div>
    </div>
  );
};

export default BlockOneText;
