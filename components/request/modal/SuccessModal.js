import React from "react";
import check from "../../../assets/check.svg";
import styles from "../../../styles/home/sendForm/SendForm.module.scss";
const SuccessModal = () => {
  return (
    <div className={styles.successModal}>
      <h3 className="h3">Благодарим!</h3>
      <p className="text_body text_body_dark">
        Ваша заявка принята. Мы свяжемся с Вами в ближайшее время.
      </p>
      <Image src={check} alt="check" />
    </div>
  );
};

export default SuccessModal;
