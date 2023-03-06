import React from "react";
import styles from "../../../styles/home/oversea/Oversea.module.scss";
import Heading from "../../shared/Heading";

const OverseaProject = ({ isDark }) => {
  return (
    <div className={styles.OverseaProject}>
      <Heading
        isDarkBg={isDark}
        caption={"НАШИ ПРОЕКТЫ"}
        h2="зарубежные проекты"
        p="ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша
        цель - комфорт и хорошее настроение наших клиентов."
      />
      {/* <div className="heading">
        <div>
          <span className="caption">НАШИ ПРОЕКТЫ</span>
          <h2 className="h2">зарубежные проекты</h2>
        </div>
        <p className="text_body">
          ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша
          цель - комфорт и хорошее настроение наших клиентов.
        </p>
      </div> */}
    </div>
  );
};

export default OverseaProject;
