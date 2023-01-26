import React from "react";
import styles from "../../../styles/home/virtualTour/VirtualTour.module.scss";
import Heading from "../../shared/Heading";

const VirtualTour = ({ link }) => {
  return (
    <div className={styles.virtualTour}>
      <Heading
        isDarkBg={true}
        caption="О НАШИХ ЖК"
        h2="Виртуальная экскурсия"
        p="ПОВТОРЕНИЕ ТЕКСТА. Наша традиция - строить качественные дома, а наша цель - комфорт и хорошее настроение наших клиентов. "
      />
      <div className={"wrapper" + " " + styles.tour3dView_details_wrapper}>
        <div className={styles.tour3dView + " " + styles.tour3dView_details}>
          <iframe
            width="100%"
            height="614"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            src={`${link}?fs=1&vr=0&zoom=1&sd=1&thumbs=1&inst=ru`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
