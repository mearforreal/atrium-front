import React, { useContext, useState } from "react";
import styles from "../../styles/header/Navbar.module.scss";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import useScreen from "../../hooks/useScreen";
import { Burger, Popover } from "@mantine/core";
import NavLink from "next/link";
import insta from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import { DataContext } from "../../context/DataContext";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const screen = useScreen();

  const [opened, setOpened] = useState(false);

  const [openedPopOver, setOpenedPopOver] = useState(false);

  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  let activeClassName = "underline";
  return (
    <div className={styles.navbar}>
      <nav className={styles.navbar__top}>
        <ul className={styles.navbar__top__left}>
          <li>
            <select>
              <option value="RU">RU</option>
              <option value="KZ">KZ</option>
              <option value="EN">EN</option>
            </select>
          </li>

          {screen.isDesktop ? (
            <>
              <li>
                <Popover
                  opened={openedPopOver}
                  onChange={setOpenedPopOver}
                  position="bottom"
                  withArrow
                  shadow="md"
                >
                  <Popover.Target>
                    <a
                      onMouseEnter={() => setOpenedPopOver(true)}
                      href={"/about"}
                    >
                      о нас
                    </a>
                  </Popover.Target>
                  <Popover.Dropdown
                    onMouseLeave={() => setOpenedPopOver(false)}
                  >
                    <a style={{ color: "#727272" }} href={"/oversea"}>
                      Tavros
                    </a>
                  </Popover.Dropdown>
                </Popover>
              </li>

              <li>
                <a href={"/portfolio"}>Портфолио</a>
              </li>

              <li>
                <a href={"/purchase"}>Приобрести</a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <ul className={styles.navbar__top__right}>
          <li>
            <NavLink href={"/"}>
              <Image
                src={logo}
                alt="logo"
                className={opened ? styles.navbar__top__logo : ""}
              />
            </NavLink>
          </li>
          {screen.isDesktop ? (
            <>
              {" "}
              <li>
                <a href={"/news"}>Новости</a>
              </li>
              <li>
                <a href={"/partner"}>Сотрудничество</a>
              </li>
              <li>
                <a href={"/contact"}>контакты</a>
              </li>
            </>
          ) : (
            <>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                style={{ marginRight: 32.08 }}
                color={opened ? "#FFF" : "#BC6D41"}
              />
            </>
          )}
        </ul>
      </nav>
      {opened ? (
        <div className={styles.mobileMenu}>
          <ul>
            <li>
              <NavLink href={"/"} className="h5">
                главная
              </NavLink>
            </li>
            <li>
              <NavLink href={"/about"} className="h5">
                о нас
              </NavLink>
            </li>
            <li>
              <NavLink href={"/oversea"} className="h5">
                tavros
              </NavLink>
            </li>
            <li>
              <NavLink href={"/portfolio"} className="h5">
                портфолио
              </NavLink>
            </li>
            <li>
              <NavLink href={"/purchase"} className="h5">
                приобрести
              </NavLink>
            </li>
            <li>
              <NavLink href={"/news"} className="h5">
                новости
              </NavLink>
            </li>
            <li>
              <NavLink href={"/partner"} className="h5">
                сотрудничество
              </NavLink>
            </li>
            <li>
              <NavLink href={"/contact"} className="h5">
                контакты
              </NavLink>
            </li>
            <div className={styles.mobileMenu_social}>
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
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
