import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import { MoreNews, NewsDetailsComponent } from "../../components/news";
import styles from "../../styles/news/details/NewsDetails.module.scss";
import axios from "axios";
import { PREFIX_API, PREFIX_IMG } from "../../config";
import HeaderBannerNews from "../../components/header/HeaderBannerNews";

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${PREFIX_API}news/all`);

  const res_data = await res.data;

  // Get the paths we want to pre-render based on posts
  const paths = res_data?.map((item) => ({
    params: { slug: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  // Fetching data from jsonplaceholder.
  const res = await axios.get(`${PREFIX_API}news/show/${context.params.slug}`);

  const newsInfo = await res.data;

  // Sending fetched data to the page component via props.
  return {
    props: {
      newsInfo,
    },
  };
};

const NewsDetails = ({ newsInfo }) => {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <div>
      <div className={"header"}>
        <Navbar />
        <HeaderBannerNews bgUrl={PREFIX_IMG + newsInfo.news.img} />
      </div>
      <div className={styles.newsDetails_container}>
        <NewsDetailsComponent newsdetail={newsInfo?.news} />
        <MoreNews moreNews={newsInfo?.more_news} />
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetails;
