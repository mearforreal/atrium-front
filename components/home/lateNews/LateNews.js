import React from "react";
import styles from "../../../styles/home/lateNews/LateNews.module.scss";
import Heading from "../../shared/Heading";
import moreArrow from "../../../assets/moreArrow.svg";
import Image from "next/image";

const LateNews = () => {
  // todo backgroun and block img
  return (
    <div className={styles.lateNews}>
      <div className={styles.lateNews_header}>
        <Heading
          isDarkBg={false}
          h2={"последние новости"}
          caption={"АКТУАЛЬНЫЕ НОВОСТИ"}
          p={
            "ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша цель - комфорт и хорошее настроение наших клиентов. "
          }
        />
      </div>

      <div className={styles.lateNews_container}>
        <div className={styles.lateNews_header_more}>
          <p>Все новости</p>
          <img width={9.32} height={11.25} src={moreArrow} />
        </div>

        <div className={styles.lateNews_blocks}>
          <div className={styles.lateNews_blocks_left}>
            <div className={styles.lateNews_blocks_left_top}>
              <div className={styles.lateNews_block_lefts_top_1}></div>
              <div className={styles.lateNews_blocks_left_top_2}></div>
            </div>
            <div className={styles.lateNews_blocks_left_bottom}></div>
          </div>
          <div className={styles.lateNews_blocks_right}></div>
        </div>
      </div>
    </div>
  );
};

export default LateNews;
