import React from "react";
import BuildComplex from "../../components/home/complex/BuildComplex";
import OverseaProject from "../../components/home/oversea/OverseaProject";
import OverseaSlider from "../../components/home/oversea/OverseaSlider";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import { PREFIX_API } from "../../config";
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
          video_url={
            "//cdn-cf-east.streamable.com/video/mp4/xofriq.mp4?Expires=1676709600&Signature=XlpIcfTtjuGSCrM6bYDI8iZC2-v1EaGyyHrCAceI69cvk11uAQpFnhdL9J8M0KAP4MF5Zlsp2L9kAjN9RuEI6tnW06UFJh-dylsRf2EQKUT0M0M-Ik3n1BADV5faXyxXHpm7dCzCeu5CPc6eIsWL9uBtcNAxkRg27O9jW5cu3q2k3~M26w3pNg7tzZJQuC9nZkVAW-TDSRbLJ7t4GRLTGOCatfYSAtad2e0xT6zn~idO1NH9k72N3BRKcrj5Jr-5~-jMYc2qf~FLFwWfIQHGLLytVJcUmMjPt4GnXDfUZWXuGH0I239r3MwRVEfSEniWMksI-IxswDC0z7wjbbbnfQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ"
          }
        />
      </div>
      <div className="">
        <Complex projectData={projectData} />
        <div className="bg_dark" style={{ paddingBottom: "200px" }}>
          <OverseaProject isDark={true} />
          <OverseaSlider oversea={oversea} isDark={true} />
        </div>
      </div>
      <Footer bgDark={true} />
    </div>
  );
};

export default Portfolio;
