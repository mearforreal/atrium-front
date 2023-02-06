import React from "react";
import Heading from "../../shared/Heading";
import styles from "../../../styles/purchase/PurchaseDetails.module.scss";
import NearLocationItem from "./NearLocationItem";
import { PREFIX_IMG } from "../../../config";
import Image from "next/image";

const Location = ({ near_locations, map_location }) => {
  //console.log(map_location?.metrics);
  return (
    <>
      <div className={styles.nearLocation}>
        <Heading
          caption={"О ПРОЕКТЕ"}
          h2={"РАСПОЛОЖЕНИЕ"}
          p={
            "Богатая инфраструктура, удобная связь с другими районами мегаполиса и прекрасная экологическая обстановка делают Elite Life привлекательным выбором для жизни."
          }
        />
        <div className={styles.location}>
          {near_locations?.map((item) => (
            <NearLocationItem item={item} key={item.id} />
          ))}
        </div>
      </div>

      {!!map_location ? (
        <div
          className={
            !!map_location?.metrics[0].metric
              ? styles.halfMap + " " + "wrapper"
              : styles.fullMap
          }
        >
          <img src={PREFIX_IMG + map_location?.img} />
          {!!map_location?.metrics[0].metric ? (
            <div className={styles.map_location_metrics}>
              {map_location?.metrics?.map((element) => (
                <div className={styles.map_location_metrics_wrapper}>
                  <span>{element.titleRU}</span>
                  <span>{element.number + " " + element.metric}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export default Location;
