import React from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import { ActualNews, MoreNews } from "../../components/news";
import Breadcumb from "../../components/shared/Breadcumb";

const breadcumbData = {
  current: {
    href: "/news",
    title: "новости",
  },
  nav: [],
};
const News = ({ lateNews, moreNews }) => {
  return (
    <div className="">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="НОВОСТИ"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl="/assets/bg/news.png"
        />
      </div>
      <Breadcumb current={breadcumbData.current} />
      <ActualNews lateNews={lateNews ? lateNews : [0, 1, 2, 3, 4]} />
      <MoreNews moreNews={moreNews} />
      <Footer />
    </div>
  );
};

export default News;
