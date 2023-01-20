import React from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Strategy from "../../components/about/Strategy";
import Missions from "../../components/about/Missions";
import OurValue from "../../components/about/OurValue";
import Advantages from "../../components/about/Advantages";
const About = () => {
  return (
    <div className="main_conatiner">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="О НАС."
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl="/assets/bg/about.png"
        />
      </div>
      <Strategy />
      <Missions />
      <OurValue />
      <Advantages />

      <Footer />
    </div>
  );
};

export default About;
