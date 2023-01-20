import React, { useContext } from "react";
import styles from "../../../styles/home/sendForm/SendForm.module.scss";
import Image from "next/image";
import map from "../../../assets/map.png";
import { Map, Placemark } from "react-yandex-maps";
import { DataContext } from "../../../context/DataContext";
import { PREFIX_IMG } from "../../../config";

// console.log(map);

const SendForm = () => {
  // const [zoom, setZoom] = React.useState(17.5);

  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  console.log(setting);

  const mapState = React.useMemo(
    // 43.225254, 76.959614
    () => ({ center: [43.225254, 76.959614], zoom: 17.5 }),
    []
  );
  return (
    <div className={styles.sendForm}>
      <form className={styles.sendForm_form}>
        <span className="caption caption_light">СВЯЖИТЕСЬ С НАМИ</span>
        <h3 className="h3">заполните форму</h3>
        <div className={styles.sendForm_form_group}>
          <input type="text" placeholder="Ваше ФИО" required />
          <input type="tel" placeholder="Номер телефона" required />
          <input type="email" placeholder="E-mail" required />
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
          frameborder="0"
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
              iconImageSize: [32, 32],
            }}
            geometry={mapState.center}
          />
        </Map>
        {/* <img src={map.src} alt="map" /> */}
      </div>
    </div>
  );
};

export default SendForm;
