import React, { useContext } from "react";
import styles from "../../styles/footer/Footer.module.scss";
import logo from "../../assets/footer/logo.svg";
import address from "../../assets/footer/address.svg";
import insta from "../../assets/footer/insta.svg";
import mail from "../../assets/footer/mail.svg";
import phone from "../../assets/footer/phone.svg";
import facebook from "../../assets/footer/facebook.svg";
import time from "../../assets/footer/time.svg";
import Image from "next/image";
import { DataContext } from "../../context/DataContext";

const Footer = ({ bgDark }) => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  return (
    <div className={bgDark ? styles.footer_dark : styles.footer}>
      <div className={styles.footer_info}>
        <div className={styles.footer_logo}>
          <Image src={logo} className={styles.footer_logo_img} alt="logo" />

          <div className={styles.footer_social}>
            <a href={setting?.insta}>
              <Image src={insta} alt="insta" />
            </a>
            <a href={setting?.facebook}>
              <Image src={facebook} alt="facebook" />
            </a>
          </div>
          <p>Сайт разработан студией Web Marketing</p>
        </div>
        <div className={styles.footer_nav}>
          <p className="footer_header">Навигация</p>
          <div className={styles.footer_nav_content}>
            <ul className={styles.footer_nav_content_left}>
              <li>
                <a className="b2" href="/">
                  Приобрести
                </a>
              </li>
              <li>
                <a className="b2" href="/">
                  Сотрудничесвто
                </a>
              </li>
              <li>
                <a className="b2" href="/">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
            <ul className={styles.footer_nav_content_right}>
              <li>
                <a className="b2" href="/">
                  О нас
                </a>
              </li>
              <li>
                <a className="b2" href="/">
                  Портфолио
                </a>
              </li>
              <li>
                <a className="b2" href="/">
                  Новости
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_contact}>
          <p className="footer_header">Контакты</p>
          <div className={styles.footer_contact_content}>
            <ul className={styles.footer_contact_content_left}>
              <li>
                <Image src={phone} alt="phone" />
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 7 }}
                >
                  {setting?.tel?.map((item) => (
                    <span key={item.tel} className="b2">
                      {item.tel}
                    </span>
                  ))}
                </div>
              </li>
              <li>
                <Image src={mail} alt="mail" />
                <span className="b2">{setting?.email}</span>
              </li>
              <li>
                <Image src={address} alt="address" />
                <span className="b2">{setting?.address}</span>
              </li>
            </ul>

            <div className={styles.footer_contact_content_right}>
              <Image src={time} alt="time" />
              <div className={styles.footer_contact_time}>
                <span className="b2">{setting?.workingHour_weekdays}</span>
                <span className="b2">{setting?.workingHour_weekdends}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>© 2021 Copyright by Atrium Plus</p>
      </div>
    </div>
  );
};

export default Footer;
