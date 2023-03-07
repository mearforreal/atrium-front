import React, { useState } from "react";
import Heading from "../../shared/Heading";
import styles from "../../../styles/home/virtualTour/VirtualTour.module.scss";

const VirtualTour = ({ projectData }) => {
  const findIndex = (id) => {
    let index = projectData.findIndex((item) => {
      return item.id === id;
    });
    return index === -1 ? 0 : index;
  };
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className={styles.virtualTour}>
      <Heading
        isDarkBg={true}
        caption="О НАШИХ ЖК"
        h2="Виртуальная экскурсия"
        p=""
      />
      <div className={styles.tourViewWrapper}>
        <div className={styles.tour3dView}>
          <iframe
            width="100%"
            height="614"
            frameBorder="0"
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            allowFullScreen
            scrolling="no"
            // src="https://kuula.co/share/collection/79gfK?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"
            src={`${
              projectData[findIndex(currentId)]?.virtualTour
            }?fs=1&vr=0&zoom=1&sd=1&thumbs=1&inst=ru`}
          ></iframe>
        </div>
        <ul className={styles.tour3dView_options}>
          {projectData?.map((item) =>
            !!item?.virtualTour ? (
              <li key={item.id}>
                <h6
                  onClick={() => {
                    setCurrentId(item.id);
                  }}
                  className={
                    "h6" +
                    " " +
                    (item.id === currentId
                      ? styles.tour3dView_options_active
                      : "")
                  }
                >
                  {item.titleRU}
                </h6>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default VirtualTour;
