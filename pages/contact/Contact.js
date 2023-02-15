import React, { useContext, useState } from "react";
import SendForm from "../../components/home/sendForm/SendForm";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Breadcumb from "../../components/shared/Breadcumb";
import ContactView from "../../components/shared/ContactView";
import { DataContext } from "../../context/DataContext";
import BreadcumbContact from "../../components/shared/BreadcumbContact";
import backArrow from "../../assets/backArrow.svg";
import breadcumbStyles from "../../styles/breadcumb/Breadcumb.module.scss";
import Link from "next/link";
import Image from "next/image";
const Contact = ({ contactData }) => {
  const data = useContext(DataContext);
  let [setting, setSetting] = data;

  const [contactCurrentId, setContactCurrentId] = useState(0);

  const breadcumbData = {
    current: {
      href: "/contact",
      title: "контакты",
    },
    nav: ["atrium plus", "Elite life", "luxury park", "kokjiek city"],
  };

  const contact_infos = [
    {
      ...setting,
      project: {
        id: 0,
        titleRU: "atrium plus",
      },
      id: 0,
      titleRU: "atrium plus",
      project_id: 0,
    },
    ...(contactData ?? []),
  ];

  const findIndex = (id) => {
    return contact_infos.findIndex((item) => {
      return item.id === id;
    });
  };

  const handleContactNavClick = (id) => {
    setContactCurrentId(id);
  };
  // console.log(contact_nav);

  return (
    <div className="">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="КОНТАКТЫ"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl="/assets/bg/contact.png"
        />
      </div>

      <>
        <div
          className={
            "wrapper d-flex breadcumb_wrapper " + breadcumbStyles.breadcumb
          }
        >
          <div className={breadcumbStyles.breadcumb__container}>
            <div className={breadcumbStyles.breadcumb__left}>
              <div className={breadcumbStyles.breadcumb__home}>
                <img src={backArrow} alt="backArrow" />
                <Link href={"/"}> главная </Link>
              </div>
              <span className={breadcumbStyles.breadcumb__current}>
                <Link href={breadcumbData.current?.href || ""}>
                  {" "}
                  {breadcumbData.current?.title}{" "}
                </Link>
                <span className={breadcumbStyles.breadcumb__current_dot} />
              </span>
            </div>
            <div className={breadcumbStyles.breadcumb__main}>
              <ul>
                {contact_infos &&
                  contact_infos?.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => handleContactNavClick(item.id)}
                    >
                      <span
                        className={
                          item.id === contactCurrentId ? "breadcumb_active" : ""
                        }
                      >
                        {!!item?.project?.titleRU
                          ? item.project.titleRU
                          : !!item?.titleRU}
                      </span>
                      {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={breadcumbStyles.breadcumb__mainBtn}>
          <ul>
            {contact_infos &&
              contact_infos?.map((item, index) => (
                <li
                  className={
                    item.id === contactCurrentId ? "btn_primary" : "btn_outline"
                  }
                  key={item.id}
                  onClick={() => handleContactNavClick(item.id)}
                >
                  <span>
                    {!!item?.project?.titleRU
                      ? item.project.titleRU
                      : !!item?.titleRU}
                  </span>
                  {/* <Link href={item?.href || ""}> {item?.title} </Link> */}
                </li>
              ))}
          </ul>
        </div>
      </>

      <ContactView contactInfo={contact_infos[findIndex(contactCurrentId)]} />
      <Footer />
    </div>
  );
};

export default Contact;
