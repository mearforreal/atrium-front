// import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/home/Home.module.scss";

import BlockOneSlider from "../components/home/blockOne/BlockOneSlider";
import BlockOneText from "../components/home/blockOne/BlockOneText";
import Navbar from "../components/header/Navbar";
import HeaderBanner from "../components/header/HeaderBanner";
import OverseaProject from "../components/home/oversea/OverseaProject";
import OverseaSlider from "../components/home/oversea/OverseaSlider";

import VirtualTour from "../components/home/virtualTour/VirtualTour";

import SendForm from "../components/home/sendForm/SendForm";
import Footer from "../components/footer/Footer";
import axios from "axios";

import { PREFIX_API } from "../config";
import { ActualNews } from "../components/news";
import { useEffect } from "react";

import dynamic from "next/dynamic";
// const DynamicComponentWithNoSSR = dynamic(
//   () => import('package'),
//   { ssr: false }
// )

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async () => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(`${PREFIX_API}project/home-page`);
  const projectData = await res.data;

  const resOversea = await axios.get(`${PREFIX_API}oversea/index`);
  const oversea = await resOversea.data;

  const resLateNews = await axios.get(`${PREFIX_API}news/latest`);
  const lateNews = await resLateNews.data;

  return {
    props: {
      projectData,
      oversea,
      lateNews,
    },
  };
};

const Wowjs = dynamic(() => import("wowjs"), { ssr: false });

export default function Home({ projectData, oversea, lateNews }) {
  // useEffect(() => {
  //   window.navigator.geolocation.getCurrentPosition(
  //     (newPos) => setPosition(newPos),
  //     console.error
  //   );
  // }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <div className="">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="С заботой о Вас!"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl="/assets/bg/bg1.png"
        />
      </div>

      <div className={styles.blockOne + " " + styles.block_container}>
        <div className="wow fadeInUp" data-wow-offset="20">
          <BlockOneSlider projectData={projectData} />{" "}
        </div>{" "}
        <div className="wow slideInLeft" data-wow-offset="20">
          <BlockOneText />
        </div>
      </div>

      <div className="main_bg">
        <div className="wow slideInRight" data-wow-offset="20">
          <OverseaProject />
        </div>

        <div className="wow bounceInUp" data-wow-offset="20">
          {oversea?.length > 0 ? (
            <OverseaSlider isDark={false} oversea={oversea} />
          ) : (
            ""
          )}
        </div>
        {/* <BuildComplex projectData={projectData} />
        <Gallery projectData={projectData} /> */}
      </div>
      <VirtualTour projectData={projectData ? projectData : [0, 1, 2, 3, 4]} />
      <div className="wow slideInRight" data-wow-offset="20">
        <ActualNews lateNews={lateNews ? lateNews : [0, 1, 2, 3, 4]} />
      </div>
      <div className="wow slideInRight" data-wow-offset="20">
        <SendForm />
      </div>

      <Footer />
    </div>
  );
}
