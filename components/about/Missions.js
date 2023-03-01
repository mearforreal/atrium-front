import React, { useEffect, useRef } from "react";
import missionStyles from "../../styles/about/Missions.module.scss";
import Image from "next/image";
import gsap from "gsap";

const data = [
  { id: 1, img: "image-" },
  { id: 2, img: "image-" },
  { id: 3, img: "image-" },
  // { id: 4, img: "image-", title: "elite life" },
];
const Missions = () => {
  const imgRef = useRef(null);

  return (
    <div className={missionStyles.missions} id="missions">
      <span className={missionStyles.decorativeText}>Atrium Plus</span>
      <div className={missionStyles.missions_top}>
        <div className={missionStyles.missions_top_left}>
          <div className="">
            <span className={`caption caption_light`}>О НАШЕЙ КОМПАНИИ</span>
            <h2 className={`h2 h2_white`}>МИССИЯ</h2>
            <p className={`text_body text_body_white`}>
              Мы созданы для того, чтобы радовать людей, качественно
              организовывая их жизненное пространство и не нарушая архитектурный
              облик города.
            </p>
          </div>
        </div>

        <div className={missionStyles.missions_top_right}>
          <span className={`caption caption_light`}>О НАШЕЙ КОМПАНИИ</span>
          <h2 className={`h2 h2_white`}>НАШЕ ВИДЕНИЕ</h2>
          <p className={`text_body text_body_white`}>
            Мы приложим все усилия, для того чтобы войти в тройку самых
            качественных и инновационных застройщиков рынка элитного жилья
            Казахстана в перспективе 7 лет, с долей рынка не менее 10%.
          </p>
        </div>
      </div>
      <div ref={imgRef} id="images" className={missionStyles.missions_images}>
        {data?.map((item, index) => (
          <div
            style={{
              width: index === 1 ? "70%" : "20%",
              // flex: index === 1 ? "1" : "0",
            }}
            key={item.id}
            className={missionStyles.missions_images_container}
          >
            <img
              className={
                index === 1
                  ? missionStyles.missions_image_current
                  : missionStyles.missions_image
              }
              src={"/assets/img/about/missions/image-" + (index + 1) + ".png"}
              alt={index + 1 + ".png"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
