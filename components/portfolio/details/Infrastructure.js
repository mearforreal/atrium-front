import React from "react";
import styles from "../../../styles/portfolio/details/Infac.module.scss";
import { PREFIX_IMG } from "../../../config";

const Infrastructure = ({ infrastructures }) => {
  //console.log(infrastructures[0].indicators);
  return (
    <div className={styles.infrastructures_wrapper + " " + "wrapper"}>
      {infrastructures?.map((item) => (
        <div key={item.id} className={styles.infrastructure}>
          <img
            className={styles.infrastructure_map}
            src={PREFIX_IMG + item.img}
            alt="img"
          />
          <div>
            <div className={styles.infrastructure_header}>
              <span className="caption caption_dark">О ПРОЕКТЕ</span>
              <p className="h2 h2_dark">
                Инфраструктура, которой завидует город
              </p>
            </div>

            <div className={styles.infrastructure_indicators}>
              {item?.indicators?.map((icon) => (
                <div
                  key={icon.icon}
                  className={styles.infrastructure_indicators_line}
                >
                  <img src={PREFIX_IMG + icon.icon} alt="indicator" />
                  <p className="b1">{icon.titleRU}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Infrastructure;
