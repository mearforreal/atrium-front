import React from "react";
import styles from "../../styles/about/Advantages.module.scss";
import AdvantageItem from "./AdvantageItem";

const data = [
  {
    id: 1,
    title: "НАДЕЖНОСТЬ",
    description:
      "Всегда быть компанией, которая выполняет свои обязательства и отвечает за высокое качество своих уютных домов, в которых всегда хочется жить и где чувствуется надёжность во всём. Мы строим наши дома всегда в срок, используя наилучшие технологические решения.",
  },
  {
    id: 2,
    title: "Современность",
    description:
      "Всегда придерживаться самых современных и высоких стандартов строительных технологий, которые придают людям полную уверенность в том, что они сделали правильный выбор своего современного застройщика в нашем лице. Наши дома не только современны и технологичны, но и изящно гармонируют с общей городской архитектурой и инфраструктурой.",
  },
  {
    id: 3,
    title: "Личность",
    description:
      "Отличительной чертой организации нашего бизнеса является каждая личность. Это означает, что мы будем ориентироваться на потребности каждого нашего клиента, соответствуя и даже предвосхищая его ожидания.",
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
