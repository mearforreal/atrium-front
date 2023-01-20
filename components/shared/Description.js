import React from "react";

const Description = ({ isDark = false, caption, title, description }) => {
  return (
    <div className={"description"}>
      <span className={`caption ${isDark ? "caption_dark" : "caption_light"}`}>
        {title}
      </span>
      <h2 className={`h2 ${isDark ? "h2_dark" : "h2_white"} `}>
        {description}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default Description;
