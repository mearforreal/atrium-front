import React, { useState } from "react";
import Room from "../../components/purchase/details/Room";
import ContactView from "../../components/shared/ContactView";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Breadcumb from "../../components/shared/Breadcumb";
import Main from "../../components/portfolio/details/Main";
import Advantages from "../../components/portfolio/details/Advantages";
import Gallery from "../../components/portfolio/details/Gallery";
import Location from "../../components/purchase/details/Location";
import styles from "../../styles/purchase/PurchaseDetails.module.scss";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { PREFIX_API, PREFIX_IMG } from "../../config";
import footerStyles from "../../styles/footer/Footer.module.scss";
import RequestPurchaseModal from "../../components/request/modal/RequestPurchaseModal";
import BuildProcess from "../../components/portfolio/details/BuildProcess";
import Infrastructure from "../../components/portfolio/details/Infrastructure";

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
    `${PREFIX_API}project/purachse/details/${context.params.slug}`
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

const PurchaseDetails = ({ projectInfo, gallery_types }) => {
  const breadcumbData = {
    current: {
      href: "/purchase",
      title: "приобрести",
    },
    nav: [],
  };

  return (
    <div className="main_containerr">
      {" "}
      <div className="main_bg ">
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

        <div className={styles.advantages_bg}>
          <Advantages projectInfo={projectInfo} />
        </div>

        <Gallery projectInfo={projectInfo} gallery_types={gallery_types} />

        <div className={styles.purchaseDesc}>
          <div className={styles.contactView_card}>
            <span className="caption caption_dark">ПОДРОБНЕЕ О ЦЕНЕ</span>
            <h3 className="h3 text_body_white">УСЛОВИЯ ОПЛАТЫ</h3>
            <div className={footerStyles.footer_contact}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
                className={footerStyles.footer_contact_content}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="text_body text_body_white">
                    {projectInfo.service_payment_oneRU}
                  </p>

                  <p className="text_body text_body_white">
                    {projectInfo.service_payment_twoRU}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Room room_types={projectInfo?.room_types} />
        {projectInfo?.near_locations.length > 0 && (
          <Location
            projectTitle={projectInfo?.titleRU}
            near_locations={projectInfo?.near_locations}
          />
        )}

        {projectInfo?.build_process?.length > 0 ? (
          <BuildProcess build_process={projectInfo?.build_process} />
        ) : null}

        <ContactView
          contactInfo={{
            ...projectInfo?.contact,
            project: { titleRU: projectInfo?.titleRU },
          }}
        />

        <Footer />
      </div>
    </div>
  );
};

export default PurchaseDetails;
