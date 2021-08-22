import React from "react";
import fgImg from "../image/fg.png";

const styleForeground = {
  position: "absolute",
  bottom: 0,
  width: 288,
  height: 106,
  backgroundImage: `url(${fgImg})`,
};
const Foreground = () => {
  return <div id='fore-ground'style={styleForeground}></div>;
};

export default Foreground;
