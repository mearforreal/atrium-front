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
import { useRouter } from "next/router";

const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  const screen = useScreen();

  const [opened, setOpened] = useState(false);

  const [openedPopOver, setOpenedPopOver] = useState(false);

  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const router = useRouter();

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
                    <span
                      className={
                        router.pathname == "/about" ? styles.active : ""
                      }
                      onMouseEnter={() => setOpenedPopOver(true)}
                    >
                      о нас
                    </span>
                  </Popover.Target>
                  <Popover.Dropdown
                    onMouseLeave={() => setOpenedPopOver(false)}
                  >
                    <ul className={styles.about_popover}>
                      <li>
                        {" "}
                        <NavLink
                          className={
                            router.pathname == "/about" ? styles.active : ""
                          }
                          style={{
                            color: "#727272",
                            textTransform: "capitalize",
                          }}
                          href={"/about"}
                        >
                          Артриум Плюс
                        </NavLink>
                      </li>
                      <li>
                        {" "}
                        <NavLink
                          className={
                            router.pathname == "/oversea" ? styles.active : ""
                          }
                          style={{ color: "#727272" }}
                          href={"/oversea"}
                        >
                          TAVROS
                        </NavLink>
                      </li>
                    </ul>
                  </Popover.Dropdown>
                </Popover>
              </li>

              <li>
                <NavLink
                  className={
                    router.pathname.startsWith("/portfolio")
                      ? styles.active
                      : ""
                  }
                  href={"/portfolio"}
                >
                  Портфолио
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={
                    router.pathname.startsWith("/purchase") ? styles.active : ""
                  }
                  href={"/purchase"}
                >
                  Приобрести
                </NavLink>
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
                <NavLink
                  className={router.pathname == "/news" ? styles.active : ""}
                  href={"/news"}
                >
                  Новости
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={router.pathname == "/partner" ? styles.active : ""}
                  href={"/partner"}
                >
                  Сотрудничество
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={router.pathname == "/contact" ? styles.active : ""}
                  href={"/contact"}
                >
                  контакты
                </NavLink>
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
              <NavLink
                className={`h5 ${router.pathname == "/" ? styles.active : ""}`}
                href={"/"}
              >
                главная
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/about"}
                className={`h5 ${
                  router.pathname == "/about" ? styles.active : ""
                }`}
              >
                о нас
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/oversea"}
                className={`h5 ${
                  router.pathname == "/oversea" ? styles.active : ""
                }`}
              >
                tavros
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/portfolio"}
                className={`h5 ${
                  router.pathname.startsWith("/portfolio") ? styles.active : ""
                }`}
              >
                портфолио
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/purchase"}
                className={`h5 ${
                  router.pathname.startsWith("/purchase") ? styles.active : ""
                }`}
              >
                приобрести
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/news"}
                className={`h5 ${
                  router.pathname == "/news" ? styles.active : ""
                }`}
              >
                новости
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/partner"}
                className={`h5 ${
                  router.pathname == "/partner" ? styles.active : ""
                }`}
              >
                сотрудничество
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/contact"}
                className={`h5 ${
                  router.pathname == "/contact" ? styles.active : ""
                }`}
              >
                контакты
              </NavLink>
            </li>
            <div className={styles.mobileMenu_social}>
              <li>
                <NavLink target={"_blank"} href={setting?.insta}>
                  {" "}
                  <Image alt="insta" src={insta} />
                  {/* <img src={insta} alt="insta" />{" "} */}
                </NavLink>
              </li>
              <li>
                <NavLink target={"_blank"} href={setting?.facebook}>
                  <Image alt="facebook" src={facebook} />
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
