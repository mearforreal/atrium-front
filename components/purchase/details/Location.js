import React from "react";
import Heading from "../../shared/Heading";
import styles from "../../../styles/purchase/PurchaseDetails.module.scss";
import NearLocationItem from "./NearLocationItem";

const Location = ({ near_locations }) => {
  return (
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
  );
};

export default Location;
