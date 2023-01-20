import React, { useContext } from "react";
import styles from "../../styles/contact/Contact.module.scss";
import footerStyles from "../../styles/footer/Footer.module.scss";
import Image from "next/image";

import address from "../../assets/footer/address.svg";

import mail from "../../assets/footer/mail.svg";
import phone from "../../assets/footer/phone.svg";
import time from "../../assets/footer/time.svg";

import { DataContext } from "../../context/DataContext";
import { Map, Placemark } from "react-yandex-maps";
import { PREFIX_IMG } from "../../config";

const ContactView = ({ contactInfo }) => {
  // console.log(contactInfo);

  const mapState = React.useMemo(
    // 43.225254, 76.959614
    () => ({ center: [contactInfo?.lat, contactInfo?.lng], zoom: 17.5 }),
    [contactInfo.lat]
  );
  return (
    <div className={styles.contactView}>
      <div className={styles.contactView_card}>
        <span className="caption caption_light">ЦЕНТРАЛЬНЫЙ ОФИС ПРОДАЖ</span>
        <h3 className="h3">{contactInfo?.project?.titleRU}</h3>
        <div className={footerStyles.footer_contact}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
            className={footerStyles.footer_contact_content}
          >
            <ul className={footerStyles.footer_contact_content_left}>
              <li>
                <Image src={phone} alt="phone" />
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 7 }}
                >
                  {contactInfo?.tel &&
                    contactInfo?.tel?.map((item) => (
                      <span key={item?.tel} className="b2">
                        {item?.tel}
                      </span>
                    ))}
                </div>
              </li>
              <li>
                <Image src={mail} alt="mail" />
                <span className="b2">{contactInfo?.email}</span>
              </li>
              <li>
                <Image src={address} alt="address" />
                <span className="b2">{contactInfo?.address}</span>
              </li>
            </ul>

            <div className={footerStyles.footer_contact_content_right}>
              <Image src={time} alt="time" />
              <div
                style={{ gap: 9.31 }}
                className={footerStyles.footer_contact_time}
              >
                <span className="b2">{contactInfo?.workingHour_weekdays}</span>
                <span className="b2">{contactInfo?.workingHour_weekdends}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map
        width={735}
        height={598}
        state={mapState}
        className={styles?.map}
        // defaultState={{ center: [55.75, 37.57] }}
      >
        <Placemark
          options={{
            iconLayout: "default#image",
            iconImageHref: `${PREFIX_IMG + contactInfo.pointer}`,
            iconImageSize: [50, 70],
          }}
          geometry={mapState.center}
        />
      </Map>
    </div>
  );
};

export default ContactView;
