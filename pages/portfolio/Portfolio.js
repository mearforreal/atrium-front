import React from "react";
import BuildComplex from "../../components/home/complex/BuildComplex";
import OverseaProject from "../../components/home/oversea/OverseaProject";
import OverseaSlider from "../../components/home/oversea/OverseaSlider";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import { PREFIX, PREFIX_API } from "../../config";
import axios from "axios";
import Complex from "../../components/portfolio/Complex";

const Portfolio = ({ projectData, oversea }) => {
  //
  return (
    <div className={"main_bg"}>
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="ПОРТФОЛИО"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl=""
          is_video={true}
          video_url={PREFIX + "portfolio_video.mp4"}
        />
      </div>
      <div className="">
        <Complex projectData={projectData} />
        <div
          className="bg_dark"
          style={{ paddingBottom: "150px", marginTop: 90 }}
        >
          <OverseaProject isDark={true} />
          <OverseaSlider oversea={oversea} isDark={true} />
        </div>
      </div>
      <Footer bgDark={true} />
    </div>
  );
};

export default Portfolio;
