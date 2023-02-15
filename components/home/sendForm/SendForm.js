import React, { useContext, useRef } from "react";
import styles from "../../../styles/home/sendForm/SendForm.module.scss";
import Image from "next/image";
import map from "../../../assets/map.png";
import { Map, Placemark } from "react-yandex-maps";
import { DataContext } from "../../../context/DataContext";
import { PREFIX_API, PREFIX_IMG } from "../../../config";
import ReactInputMask from "react-input-mask";
import axios from "axios";
import { showNotification } from "@mantine/notifications";

// console.log(map);

const SendForm = () => {
  // const [zoom, setZoom] = React.useState(17.5);

  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const mapState = React.useMemo(
    // 43.225254, 76.959614
    () => ({ center: [43.225254, 76.959614], zoom: 17.5 }),
    []
  );

  const inputNameRef = useRef(null);
  const inputTelRef = useRef(null);
  const inputEmailRef = useRef(null);

  const handleModelSubmit = (event) => {
    event.preventDefault();

    const requestModal = {
      name: inputNameRef?.current?.value || "",
      tel: inputTelRef?.current?.value || "",
      email: inputEmailRef?.current?.value || "",
    };
    axios
      .post(PREFIX_API + "request/send", requestModal)
      .then(() => {
        showNotification({
          title: "Успешно",
          message: "Запрос отправлен успешно!",
          icon: <IconCheck size={18} />,
          color: "teal",
        });
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
    <div className={styles.sendForm}>
      <form
        className={styles.sendForm_form}
        onSubmit={(e) => handleModelSubmit(e)}
      >
        <span className="caption caption_light">СВЯЖИТЕСЬ С НАМИ</span>
        <h3 className="h3">заполните форму</h3>
        <div className={styles.sendForm_form_group}>
          <input
            type="text"
            ref={inputNameRef}
            placeholder="Ваше ФИО"
            required
          />
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
          <button type="submit" className="btn_primary">
            отправить
          </button>
        </div>
      </form>
      <div className={styles.sendForm_img}>
        {" "}
        {/* <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac9269153e329953e27f19b7edc4e21e237ada349e51d42802da993b117e831b8&amp;source=constructor"
          width="735"
          height="589"
          frameBorder="0"
        ></iframe> */}
        <Map
          width={"100%"}
          height={"100%"}
          state={mapState}
          // defaultState={{ center: [55.75, 37.57] }}
        >
          <Placemark
            options={{
              iconLayout: "default#image",
              iconImageHref: `${PREFIX_IMG + setting?.pointer}`,
              iconImageSize: [64, 72],
            }}
            geometry={mapState.center}
          />
        </Map>
        {/* <Image src={map} alt="map" /> */}
      </div>
    </div>
  );
};

export default SendForm;
