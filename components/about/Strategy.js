import React from "react";
import styles from "../../styles/about/strategy/Strategy.module.scss";
import NextArrow from "../svg/NextArrow";
import PrevArrow from "../svg/PrevArrow";
import BlockSliderItem from "../shared/BlockSliderItem";
const data = [
  { id: 1, img: "image-", title: "elite life" },
  { id: 2, img: "image-", title: "kokjiek city" },
  { id: 3, img: "image-", title: "luxury life" },
  // { id: 4, img: "image-", title: "elite life" },
];

const Strategy = () => {
  return (
    <div className={styles.strategy}>
      {/* breadcrumbing */}
      <div className="breadcrumb"></div>
      {/* img */}

      <div className={styles.strategy_content}>
        <div className={styles.strategy_slider_container}>
          <div className={"arrows" + " " + styles.arrows}>
            <PrevArrow />
            <NextArrow />
          </div>
          <div className={styles.strategy_slider}>
            {data?.map((item, index) => (
              <BlockSliderItem
                key={item.id}
                img={"/assets/img/blockOne/" + item.img + (index + 1) + ".png"}
                additionalClass={
                  styles.slider_item +
                  " " +
                  (index === data.length - 1
                    ? styles.slider_item_current
                    : styles.slider_item_non_current)
                }
              />
            ))}
          </div>
          <div className={"page" + " " + styles.page}>
            <span className="page_current">01 </span>
            <span className="page_total"> / 04</span>
          </div>
        </div>

        {/* text */}

        <div className={styles.strategy_description}>
          <span className={`caption caption_dark`}>О НАШЕЙ КОМПАНИИ</span>
          <h2 className={`h2 h2_dark`}>СТРАТЕГИЯ</h2>
          <p className={`text_body text_body_dark`}>
            Чтобы достичь наши цели мы будем постоянно отслеживать инновационные
            строительные технологии, основные на их исключительной пригодности
            для условий выбранного региона Казахстана. Также мы планируем
            использовать самые качественные и износостойкие строительные
            материалы для поддержания высокого имиджа компании. Наше
            конкурентное преимущество будет достигнуто за счёт строгого баланса
            между применением современных технологий и постоянной оценки общей
            конъектуры рынка. Наши архитекторы при планировании будут стараться
            не нарушать общей городской архитектуры, органично вписываясь в её
            инфраструктуру.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
