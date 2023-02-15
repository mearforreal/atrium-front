import React from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Breadcumb from "../../components/shared/Breadcumb";
import styles from "../../styles/partner/Partner.module.scss";
import Main from "../../components/partner/Main";
import SendForm from "../../components/home/sendForm/SendForm";
import Tender from "../../components/partner/Tender";
import Heading from "../../components/shared/Heading";
const breadcumbData = {
  current: {
    href: "/partner",
    title: "сотрудничество",
  },
  nav: [],
};
const Partner = () => {
  return (
    <div className="">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          bgUrl="/assets/bg/partner.png"
          title={"сотрудничество"}
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
        />
      </div>
      <Breadcumb current={breadcumbData.current} />
      <Main />

      <Tender />
      <SendForm />
      <Footer />
    </div>
  );
};

export default Partner;
