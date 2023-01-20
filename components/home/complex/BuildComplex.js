import React from "react";
import BuildComplexSlider from "./BuildComplexSlider";
import styles from "../../../styles/home/complex/Complex.module.scss";
import Heading from "../../shared/Heading";

const BuildComplex = (props) => {
  return (
    <div style={props.style} className={styles.buildComplex}>
      <Heading
        isDarkBg={false}
        caption={"О НАШЕЙ КОМПАНИИ"}
        h2="наши жилые комплексы"
        p="ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша
          цель - комфорт и хорошее настроение наших клиентов."
      />
      {/* <div className="heading">
        <div>
          <span className="caption">О НАШЕЙ КОМПАНИИ</span>
          <h2 className="h2">наши жилые комплексы</h2>
        </div>
        <p className="text_body">
          ПОВТОРЕНИЕ ТЕКСТА Наша традиция - строить качественные дома, а наша
          цель - комфорт и хорошее настроение наших клиентов.
        </p>
      </div> */}
      <BuildComplexSlider projectData={props.projectData} />
    </div>
  );
};

export default BuildComplex;
