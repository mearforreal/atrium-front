import React from "react";
import Heading from "../../shared/Heading";
import styles from "../../../styles/news/details/NewsDetails.module.scss";
import { PREFIX_IMG } from "../../../config";
import { formateDate } from "../../../utils/DateUtils";

const NewsDetailsComponent = ({ news }) => {
  return (
    <div className={styles.newsDetails}>
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(248, 248, 248, 0.7), rgba(248, 248, 248, 0.7)),url(${
            PREFIX_IMG + news.img
          })`,
          backgroundSize: "100% 100%",
        }}
        //  /
        className={styles.newsDetails_banner_blur}
        alt="newsDetails_banner"
      />
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(37, 78, 156, 0.16), rgba(37, 78, 156, 0.16)),url(${
            PREFIX_IMG + news.img
          })`,
          backgroundSize: "100% 100%",
        }}
        //  /
        className={styles.newsDetails_banner}
        alt="newsDetails_banner"
      />
      {/* <Heading
        isDarkBg={false}
        h2={"ЖК “Elite Life” - стань частью успешного проекта"}
        p={`Общекультурный цикл вызывает текст. Согласно теории "вчувствования", разработанной Теодором Липпсом, эзотерическое готично вызывает незначительный стиль. Социально-психологический фактор, так или иначе, продолжает невротический базовый тип личности.
        Шиллер утверждал: миракль начинает художественный талант. Гармония заканчивает определенный художественный идеал. Воображение, в том числе, потенциально. Ф.Шилер, Г.Гете, Ф.Шлегели и А.Шлегели выразили типологическую антитезу классицизма и романтизма через противопоставление искусства "наивного" и "сентиментального", поэтому идея (пафос) использует канон. Художественное восприятие многопланово вызывает композиционный ритм.`}
      /> */}

      <div className={styles.newsDetails_content + " " + "wrapper"}>
        <div>
          <span className={`caption caption_light`}>
            {formateDate(news.created_at)} Г.
          </span>
          <h2 className={`h2 h2_dark`}>{news.titleRU}</h2>
        </div>
        <p className={`text_body h2_dark`}>{news.descRU}</p>
      </div>
    </div>
  );
};

export default NewsDetailsComponent;
