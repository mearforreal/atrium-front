import React from "react";
import styles from "../../styles/about/Advantages.module.scss";
import AdvantageItem from "./AdvantageItem";

const data = [
  {
    id: 1,
    title: "НАДЕЖНОСТЬ",
    description:
      "Наша компания несет полную ответственность за качество своих проектов. Мы строим уютные дома, в которых хочется проводить свой досуг и в которые приятно вернуться после тяжелого рабочего дня.",
  },
  {
    id: 2,
    title: "Современность",
    description:
      "Мы придерживаемся самых высоких современных стандартов строительных технологий. Над экстерьером наших проектов работают лучшие дизайнеры и архитекторы, что позволяет зданиям гармонично вписываться в городскую инфраструктуру.",
  },
  {
    id: 3,
    title: "Уникальность",
    description:
      "При разработке проекта мы учитываем потребности и пожелания каждого клиента. Нам важна Ваша личность, именно это позволяет нам возводить уникальные постройки, похожие на которых вы не встретите больше нигде в городе.",
  },
];
const Advantages = () => {
  return (
    <div className={styles.advantages}>
      {data?.map((item, index) => (
        <AdvantageItem
          icon={"/assets/img/about/advantages/icon-" + (index + 1) + ".svg"}
          title={item.title}
          key={item.id}
          description={item.description}
          additionaClass={index === 0 ? styles.white_bg : styles.grey_bg}
        />
      ))}
    </div>
  );
};

export default Advantages;
