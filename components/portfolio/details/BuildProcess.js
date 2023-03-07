import React, { useCallback, useRef, useState } from "react";
import styles from "../../../styles/portfolio/details/BuildProcess.module.scss";
import { PREFIX_IMG } from "../../../config";
import PrevArrow from "../../svg/PrevArrow";
import NextArrow from "../../svg/NextArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageGallery from "react-image-gallery";
import { Modal } from "@mantine/core";
import useScreen from "../../../hooks/useScreen";

const BuildProcess = ({ build_process }) => {
  const screen = useScreen();
  const sliderRef = useRef(null);
  const [openGallery, setOpenGallery] = useState({
    images: [],
    open: false,
  });
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;

    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleopenGallery = (images) => {
    const newImgaes = images.map((item) => {
      return {
        original: PREFIX_IMG + item,
        thumbnail: PREFIX_IMG + item,
      };
    });
    //console.log(newImgaes);
    setOpenGallery({
      open: true,
      images: newImgaes,
    });
  };

  return (
    <div className={styles.buildProcess + " wrapper" + " buildProcess_plain"}>
      <div className="wrapper">
        <div className={styles.buildProcess_header}>
          <div>
            <span className="caption caption_dark">О ПРОЕКТЕ</span>
            <p className="h2 h2_dark">ход строительства</p>
          </div>

          <div className={"arrows" + " " + styles.arrows}>
            <div onClick={handlePrev}>
              <PrevArrow />
            </div>
            <div onClick={handleNext}>
              <NextArrow />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buildProcess_container + " " + "main_container"}>
        <Swiper
          ref={sliderRef}
          spaceBetween={0}
          slidesPerView={"auto"}
          speed={800}
          loop={true}
        >
          {build_process.map((process) => (
            <SwiperSlide key={process?.id}>
              <div className={styles.buildProcess_card}>
                <img src={PREFIX_IMG + process?.img[0]} alt="process_img" />
                <div className={styles.buildProcess_card_main}>
                  {/* <div className={styles.buildProcess_card_title}>
                    <p className="text text_heading">
                      {process?.week_from} - {process?.week_to}{" "}
                    </p>
                    <p className="text">Недели строительства</p>
                  </div> */}
                  <div className={styles.buildProcess_card_caption}>
                    <p className="text text_body_dark">{process?.periodRU}</p>
                    <span className="caption text_body_dark">
                      {process?.img?.length} фотографий
                    </span>
                  </div>
                  <button
                    onClick={() => handleopenGallery(process?.img)}
                    className="btn_outline"
                  >
                    Смотреть
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        className="process_modal"
        size={screen.isDesktop ? "75%" : "100%"}
        overlayOpacity={0.4}
        opened={openGallery.open}
        onClose={() => setOpenGallery({ open: false, images: [] })}
      >
        <ImageGallery items={openGallery.images} />
        {/* Modal content */}
      </Modal>
    </div>
  );
};

export default BuildProcess;
