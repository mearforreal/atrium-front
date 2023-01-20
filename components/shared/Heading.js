import React from "react";

const Heading = ({ isDarkBg = false, caption, h2, p }) => {
  return (
    <div className="heading">
      <div>
        <span
          className={`caption ${isDarkBg ? "caption_dark" : "caption_light"}`}
        >
          {caption}
        </span>
        <h2 className={`h2 ${isDarkBg ? "h2_white" : "h2_dark"}`}>{h2}</h2>
      </div>
      <p className={`text_body ${isDarkBg ? "h2_white" : "h2_dark"}`}>{p}</p>
    </div>
  );
};

export default Heading;
