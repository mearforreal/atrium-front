import { Modal } from "@mantine/core";
import React, { useRef } from "react";
import styles from "../../../styles/home/sendForm/SendForm.module.scss";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { PREFIX_API } from "../../../config";
import { IconCheck, IconX } from "@tabler/icons";
import { showNotification } from "@mantine/notifications";
import SuccessModal from "./SuccessModal";
import { openModal } from "@mantine/modals";

const RequestPurchaseModal = ({ opened, setOpened }) => {
  const inputNameRef = useRef(null);
  const inputSurnameRef = useRef(null);
  const inputTelRef = useRef(null);
  const inputEmailRef = useRef(null);

  const handleModelSubmit = (event) => {
    event.preventDefault();

    const requestModal = {
      name: inputNameRef?.current?.value || "",
      surname: inputSurnameRef?.current?.value || "",
      tel: inputTelRef?.current?.value || "",
      email: inputEmailRef?.current?.value || "",
    };
    axios
      .post(PREFIX_API + "request/send", requestModal)
      .then(() => {
        openModal({
          title: "",
          children: (
            <>
              <SuccessModal />
            </>
          ),
        });
        setOpened(false);
        // showNotification({
        //   title: "Успешно",
        //   message: "Запрос отправлен успешно!",
        //   icon: <IconCheck size={18} />,
        //   color: "teal",
        // });
      })
      .catch((e) => {
        showNotification({
          title: "Ошибка",
          message: "Произошла неизвестная ошибка",
          icon: <IconX size={18} />,
          color: "red",
        });
      });
  };
  return (
    <Modal
      opened={opened}
      size={"lg"}
      onClose={() => setOpened(false)}
      // title="Introduce yourself!"
    >
      {/* Modal content */}
      <div className={styles.requestModal_main}>
        <form
          className={styles.sendForm_form}
          onSubmit={(event) => handleModelSubmit(event)}
        >
          <h3 className="h3">
            Оставьте заявку. <br /> Мы перезвоним!
          </h3>
          <div
            className={styles.sendForm_form_group}
            style={{ alignItems: "center" }}
          >
            <div className={styles.sendForm_form_group_inner}>
              <input
                ref={inputNameRef}
                type="text"
                name="name"
                placeholder="Ваше имя"
                required
              />
              <input
                ref={inputSurnameRef}
                type="text"
                name="surname"
                placeholder="Ваша фамилия"
              />
            </div>

            <div className={styles.sendForm_form_group_inner}>
              <ReactInputMask
                ref={inputTelRef}
                placeholder="Номер телефона"
                mask="+7(999) 999 99 99"
                maskChar=" "
              />

              <input
                type="email"
                ref={inputEmailRef}
                placeholder="E-mail"
                required
              />
            </div>

            <button type="submit" className="btn_primary">
              отправить
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RequestPurchaseModal;
