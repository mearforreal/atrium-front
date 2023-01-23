import React from "react";
import styles from "../../styles/home/sendForm/SendForm.module.scss";
import { IconPhone } from "@tabler/icons";
const RequestIcon = ({ setOpened }) => {
  return (
    <>
      <div className={styles.requestIcon} onClick={() => setOpened(true)}>
        <IconPhone size={17.16} strokeWidth={2} color={"#BF8154"} />
      </div>
    </>
  );
};

export default RequestIcon;
