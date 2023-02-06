import React, { useContext, useState } from "react";
import HeaderBanner from "../components/header/HeaderBanner";
import styles from "../styles/header/HeaderBanner.module.scss";
import "swiper/css";
import Navbar from "../components/header/Navbar";
import { DataContext } from "../context/DataContext";
import insta from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import Link from "next/link";
import Image from "next/image";
import RequestMainModal from "../components/request/modal/RequestMainModal";
import RequestIcon from "../components/request/RequestIcon";

const Custom404 = () => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.custom404}>
      <div className={"header"}>
        <Navbar />
        <div className={styles.headerBanner}>
          <nav className={styles.header__social}>
            <ul>
              <li>
                <a target={"_blank"} href={setting?.insta}>
                  {" "}
                  <Image alt="insta" src={insta} />
                  {/* <img src={insta} alt="insta" />{" "} */}
                </a>
              </li>
              <li>
                <a target={"_blank"} href={setting?.facebook}>
                  <Image alt="facebook" src={facebook} />
                </a>
              </li>
            </ul>
          </nav>

          <div
            className={styles.headerBanner__main}
            style={{
              backgroundImage: `linear-gradient(107.96deg, rgba(0, 3, 72, 0.35) 0%, rgba(65, 0, 0, 0.42) 100%), url("/assets/bg/404.png")`,
            }}
          >
            {/* <hr style={{ top: 300 }} className={[styles.hr_horizantal]} /> */}
            <hr className={styles.hr_vertical} />
            <div
              className={styles.headerBanner__main_content}
              // style={{ padding: "12% 2% 0% 5%" }}
            >
              <h5 style={{ fontSize: 100 }}>404</h5>
              <p>
                Вы попали на страницу, которой не существует, либо зашли по
                неверному адресу. Не переживайте, попробуйте перейти на главную
                страницу
              </p>
              <Link
                href="/"
                type="button"
                className={"btn_primary" + " " + styles.link404}
              >
                вернуться на главную
              </Link>
            </div>
          </div>
        </div>

        <RequestMainModal opened={opened} setOpened={setOpened} />

        <RequestIcon bottom={"15.1%"} setOpened={setOpened} />
      </div>
    </div>
  );
};

export default Custom404;
