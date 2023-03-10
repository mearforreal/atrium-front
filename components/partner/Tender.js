import React, { useState } from "react";
import styles from "../../styles/partner/Partner.module.scss";
import img1 from "../../assets/partner/tender/image1.png";
import img2 from "../../assets/partner/tender/image2.png";
import RequestMainModal from "../request/modal/RequestMainModal";
import Heading from "../shared/Heading";
import Image from "next/image";

const Tender = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={styles.partnerTender_wrapper}>
      <div
        className={
          styles.partnerTender_container +
          " " +
          styles.partnerTender_container_first
        }
      >
        <div className={styles.partnerTender_content}>
          <span className="caption caption_dark">О СОТРУДНИЧЕСТВЕ</span>
          <h2 className="h2 h2_light">ТЕНДЕРЫ</h2>
          <p className="text_body text_body_dark">
            Компания «Atrium Plus» проводит тендеры на проектные и
            строительно-монтажные работы, продукцию, товары и услуги. По
            вопросам, касающихся проведения закупок, просим обращаться по
            телефону.
            <br />
            <span>+7 (727) 390 00 67</span>
          </p>
          <button onClick={() => setOpened(true)} className="btn_outline">
            заказать звонок
          </button>
        </div>
        <Image src={img1} alt="image1" />
      </div>
      <div style={{ marginTop: 163, marginBottom: 143 }} className="heading">
        <div>
          <span className={`caption caption_light`}>для соискателей</span>
          <h2 style={{ maxWidth: 388 }} className={`h2 h2_dark`}>
            Присоединяйтесь к команде atrium
          </h2>
        </div>
        <p style={{ maxWidth: 537 }} className={`text_body h2_dark`}>
          Строительная компания «Atrium Plus» - динамично развивающаяся
          компания, обладающая значительными перспективами на рынке
          недвижимости. Мы всегда рады новым лицам, стремящихся сделать свой
          город лучше. Нашим сотрудникам мы предлагаем комфортные условия труда
          и пространство, где каждый сможет проявить все свои умения и опыт.
        </p>
      </div>

      <div
        className={
          styles.partnerTender_container +
          " " +
          styles.partnerTender_container_second
        }
      >
        <div className={styles.partnerTender_content}>
          <span className="caption caption_dark">О СОТРУДНИЧЕСТВЕ</span>
          <h2 className="h2 h2_dark">СОИСКАТЕЛЯМ</h2>
          <p className="text_body text_body_dark">
            В нашей компании мы приветствуем как опытных профессионалов, так и
            молодых перспективных специалистов, готовых развиваться и достигать
            высоких результатов. Мы предоставляем сотрудникам возможность
            реализовать свой потенциал, совершенствовать уже имеющиеся знания и
            навыки и участвовать в новых масштабных проектах
          </p>
          <button onClick={() => setOpened(true)} className="btn_outline">
            заказать звонок
          </button>
        </div>
        <Image src={img2} alt="image2" />
      </div>
      <RequestMainModal opened={opened} setOpened={setOpened} />
    </div>
  );
};

export default Tender;
