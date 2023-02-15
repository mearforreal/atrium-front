import React, { useEffect, useRef } from "react";
import Navbar from "../../components/header/Navbar";
import HeaderBanner from "../../components/header/HeaderBanner";
import Footer from "../../components/footer/Footer";
import Strategy from "../../components/about/Strategy";
import Missions from "../../components/about/Missions";
import OurValue from "../../components/about/OurValue";
import Advantages from "../../components/about/Advantages";
import missionStyles from "../../styles/about/Missions.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import videoBanner from "../../assets/video/about.mp4";
// import gsap from "gsap/all";
// import gsap from "gsap";
const data = [
  { id: 1, img: "image-" },
  { id: 2, img: "image-" },
  { id: 3, img: "image-" },
  // { id: 4, img: "image-", title: "elite life" },
];
const About = ({ projectData }) => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);

  // const tl = gsap.timeline({
  //   // yes, we can add it to an entire timeline!
  //   scrollTrigger: {
  //     trigger: imageRef.current,
  //     start: "top center",
  //     toggleActions: "play none none reverse",
  //     markers: true,
  //   },
  // });

  useEffect(() => {
    const element = aboutRef.current;
    gsap.registerPlugin(ScrollTrigger);
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: element.querySelector("#missions"),
        start: "0 30%",
        // scroller: ".body-wrapper",
        end: "bottom -50%",
        scrub: 1,
      },
    });
    tl2.to(element.querySelector("#images"), {
      css: {
        transform: "translateX(25%)",
      },
      duration: 0.5,
    });
    gsap.to(element.querySelector("#mission_text_one"), {
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: "#missions",

        scrub: true,
      },
    });

    gsap.to(element.querySelector("#mission_text_two"), {
      x: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: "#missions",

        scrub: true,
      },
    });

    // timeline({
    //       scrollTrigger: {
    //         trigger: ".h-foldhome-panorama",
    //         start: "0 30%",
    //         scroller: ".body-wrapper",
    //         end: "bottom -50%",
    //         scrub: 0.3,
    //     }
    // });

    // gsap.fromTo(
    //   element.querySelector("#gsap-logo"),
    //   {
    //     opacity: 0,
    //     scale: 0.2,
    //     y: -20
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scale: 1,
    //     duration: 1,
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: element.querySelector(".first"),
    //       start: "top center",
    //       end: "bottom top",
    //       scrub: true
    //     }
    //   }
  }, []);

  return (
    <div ref={aboutRef} className="main_bg">
      <div className={"header"}>
        <Navbar />
        <HeaderBanner
          title="О НАС"
          desc={
            "Строительная компания Atrium Plus является частью инвестиционного проекта корпорации «TAVROS GROUP» основанной в 2009 году."
          }
          bgUrl=""
          is_video={true}
          video_url={videoBanner}
        />
      </div>
      {projectData?.length > 0 ? <Strategy projectData={projectData} /> : ""}

      <div className={missionStyles.missions} id="missions">
        <span className={missionStyles.decorativeText}>Atrium Plus</span>
        <div className={missionStyles.missions_top}>
          <div
            id="mission_text_one"
            className={missionStyles.missions_top_left}
          >
            <div className="">
              <span className={`caption caption_light`}>О НАШЕЙ КОМПАНИИ</span>
              <h2 className={`h2 h2_white`}>МИССИЯ</h2>
              <p className={`text_body text_body_white`}>
                Мы созданы для того, чтобы радовать людей, качественно
                организовывая их жизненное пространство и не нарушая облик
                города.{" "}
              </p>
            </div>
          </div>

          <div
            id="mission_text_two"
            className={missionStyles.missions_top_right}
          >
            <span className={`caption caption_light`}>О НАШЕЙ КОМПАНИИ</span>
            <h2 className={`h2 h2_white`}>НАШЕ ВИДЕНИЕ</h2>
            <p className={`text_body text_body_white`}>
              Мы приложим все усилия, для того, чтобы войти в тройку самых
              надежных застройщиков рынка элитного жилья Казахстана в
              перспективе семи лет, с долей рынка не менее 10%.
            </p>
          </div>
        </div>
        <div
          ref={imageRef}
          id="images"
          className={missionStyles.missions_images}
        >
          {data?.map((item, index) => (
            <div
              style={
                {
                  // width: index === 1 ? "70%" : "auto",
                  // flex: index === 1 ? "1" : "0",
                }
              }
              key={item.id}
              className={
                missionStyles.missions_images_container + " " + index === 1
                  ? missionStyles.missions_images_container_center
                  : ""
              }
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
      {projectData?.length > 0 ? <OurValue projectData={projectData} /> : ""}

      <Advantages />

      <Footer />
    </div>
  );
};

export default About;
