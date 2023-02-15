import React, { useCallback, useRef, useState } from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Breadcumb from "../../components/shared/Breadcumb";
import styles from "../../styles/portfolio/Portfolio.module.scss";
import { MoreNews } from "../../components/news";
import { PREFIX_API, PREFIX_IMG } from "../../config";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import PrevArrow from "../../components/svg/PrevArrow";
import NextArrow from "../../components/svg/NextArrow";
import Heading from "../../components/shared/Heading";
import AdvantageItem from "../../components/about/AdvantageItem";
import { Header, NavLink } from "@mantine/core";
import Gallery from "../../components/portfolio/details/Gallery";
import VirtualTour from "../../components/portfolio/details/VirtualTour";
import Main from "../../components/portfolio/details/Main";
import Advantages from "../../components/portfolio/details/Advantages";
import Location from "../../components/purchase/details/Location";
import Infrastructure from "../../components/portfolio/details/Infrastructure";
import BuildProcess from "../../components/portfolio/details/BuildProcess";

const breadcumbData = {
  current: {
    href: "/portfolio",
    title: "портфолио",
  },
  nav: [],
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${PREFIX_API}project/home-page`);

  const projectData = await res.data;

  // Get the paths we want to pre-render based on posts
  const paths = projectData?.map((project) => ({
    params: { slug: project.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(
    `${PREFIX_API}project/details/${context.params.slug}`
  );

  const resGalleryTypes = await axios.get(
    `${PREFIX_API}project/gellertypes/${context.params.slug}`
  );

  const projectInfo = await res.data;

  const gallery_types = await resGalleryTypes.data;

  // Sending fetched data to the page component via props.
  return {
    props: {
      projectInfo,
      gallery_types,
    },
    revalidate: 10,
  };
};

const PortfolioDetails = ({ projectInfo, gallery_types }) => {
  //console.log(projectInfo);

  return (
    <div className={"main_bg"}>
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          bgUrl={PREFIX_IMG + projectInfo.bannerImage}
          title={projectInfo.titleRU}
          desc={projectInfo.descRU}
        />
      </div>
      <Breadcumb current={breadcumbData.current} />

      <Main projectInfo={projectInfo} />

      {projectInfo?.infrastructures?.length > 0 ? (
        <Infrastructure infrastructures={projectInfo?.infrastructures} />
      ) : null}

      <Advantages projectInfo={projectInfo} />

      <Gallery projectInfo={projectInfo} gallery_types={gallery_types} />

      {projectInfo?.build_process?.length > 0 ? (
        <BuildProcess build_process={projectInfo?.build_process} />
      ) : null}

      {projectInfo?.near_locations?.length > 0 && (
        <Location
          near_locations={projectInfo?.near_locations}
          map_location={projectInfo?.map_location}
        />
      )}
      <VirtualTour link={projectInfo?.virtualTour} />

      <Footer bgDark={true} />
    </div>
  );
};

export default PortfolioDetails;
