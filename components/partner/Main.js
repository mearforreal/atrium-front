import React from "react";
import styles from "../../styles/partner/Partner.module.scss";
import img1 from "../../assets/partner/img1.png";
import img2 from "../../assets/partner/img2.png";
import img3 from "../../assets/partner/img3.png";
import img4 from "../../assets/partner/img4.png";

const Main = () => {
  return (
    <div className={styles.partnerMain + " " + "wrapper"}>
      <img className={styles.partnerMain_img1} src={img1.src} alt="img1" />
      <div className={styles.partnerMain_head_title}>
        <span className={styles.partnerMain_head_title_first}>наша</span>
        <span className={styles.partnerMain_head_title_second}>ФОРМУЛА</span>
        <span className={styles.partnerMain_head_title_third}>УСПЕХА</span>
      </div>
      <div className={styles.partnerMain_content}>
        <img src={img2.src} className={styles.partnerMain_img2} alt="img2" />
        <p className="text_body text_body_dark">
          В начале 2021 года в Нур-Султане и Алматы средняя цена на элитное
          жилье находилась примерно на одном уровне - 749 и 740 тыс. тенге за
          квадрат соответственно. Однако к июню в элитном сегменте между
          городами произошел существенный разрыв. Элитный сегмент в Нур-Султане
          пополнился 4 новыми комплексами, которые предложили более низкие цены,
          в силу чего средняя цена сократилась на 5,8%, до 693 тыс. тенге за
          квадратный метр. В Алматы – напротив – элитное жилье прибавило 14,7% и
          установилось на уровне 849 тыс. тенге. В 2022г. рост рынка элитного
          жилья двух городов показал ещё более существенный разрыв, доказав, что
          рынок элитного жилья г.Алматы находится в фазе активного роста. Данный
          фактор является своеобразным триггером для возможности привлечения
          широкого круга инвесторов..
        </p>
        <p className="text_body text_body_dark">
          Мы молодая компания, которая ищет и выкупает самую востребованную
          локацию для наших клиентов, в этом и есть суть нашей стратегии. Всего
          за три года нам удалось построить около 5-ти новых объектов элитного
          жилья и почти все они уже распроданы. Данное обстоятельство
          показывает, что выбранная нами тактика является достаточно
          эффективной. У нас достаточно амбициозная команда и есть плановые
          заготовки, поэтому для дальнейшего строительства именно элитного жилья
          будем рады новым инвесторам и партнёрам.
        </p>
      </div>
      <img src={img3.src} className={styles.partnerMain_img3} alt="img3" />
      <img src={img4.src} className={styles.partnerMain_img4} alt="img4" />
    </div>
  );
};

export default Main;
