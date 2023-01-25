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

const RequestMainModal = ({ opened, setOpened }) => {
  const inputNameRef = useRef(null);
  const inputTelRef = useRef(null);

  const handleModelSubmit = (event) => {
    event.preventDefault();

    const requestModal = {
      name: inputNameRef?.current?.value || "",
      tel: inputTelRef?.current?.value || "",
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
          <div className={styles.sendForm_form_group}>
            <input
              ref={inputNameRef}
              type="text"
              name="name"
              placeholder="Ваше имя"
              required
            />
            <ReactInputMask
              ref={inputTelRef}
              placeholder="Номер телефона"
              mask="+7(999) 999 99 99"
              maskChar=" "
            />

            <button
              style={{ width: "100%" }}
              type="submit"
              className="btn_primary"
            >
              отправить
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RequestMainModal;
