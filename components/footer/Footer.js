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
import Link from "next/link";

const Footer = ({ bgDark }) => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const d = new Date();

  return (
    <div className={bgDark ? styles.footer_dark : styles.footer}>
      <div className={styles.footer_info}>
        <div className={styles.footer_logo}>
          <img src={logo} className={styles.footer_logo_img} alt="logo" />
          <div className={styles.footer_social}>
            <Link target={"_blank"} href={setting?.insta ?? ""}>
              <img src={insta} alt="insta" />
            </Link>
            <Link target={"_blank"} href={setting?.facebook ?? ""}>
              <img src={facebook} alt="facebook" />
            </Link>
          </div>{" "}
          <Link target={"_blank"} href={"https://web-marketing.kz"}>
            <p> Сайт разработан студией Web Marketing</p>
          </Link>
        </div>
        <div className={styles.footer_nav}>
          <p className="footer_header">Навигация</p>
          <div className={styles.footer_nav_content}>
            <ul className={styles.footer_nav_content_left}>
              <li>
                <Link className="b2" href="/purchase">
                  Приобрести
                </Link>
              </li>
              <li>
                <Link className="b2" href="/partner">
                  Сотрудничесвто
                </Link>
              </li>
              <li>
                <Link className="b2" href="#">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
            <ul className={styles.footer_nav_content_right}>
              <li>
                <Link className="b2" href="/about">
                  О нас
                </Link>
              </li>
              <li>
                <Link className="b2" href="/portfolio">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link className="b2" href="/news">
                  Новости
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer_contact}>
          <p className="footer_header">Контакты</p>
          <div className={styles.footer_contact_content}>
            <ul className={styles.footer_contact_content_left}>
              <li>
                <img src={phone} alt="phone" />
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
                <img src={mail} alt="mail" />
                <span className="b2">{setting?.email}</span>
              </li>
              <li>
                <img src={address} alt="address" />
                <span className="b2">{setting?.address}</span>
              </li>
            </ul>

            <div className={styles.footer_contact_content_right}>
              <img src={time} alt="time" />
              <div className={styles.footer_contact_time}>
                <span className="b2">{setting?.workingHour_weekdays}</span>
                <span className="b2">{setting?.workingHour_weekdends}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <p>© {d.getFullYear()} Copyright by Atrium Plus</p>
      </div>
    </div>
  );
};

export default Footer;
