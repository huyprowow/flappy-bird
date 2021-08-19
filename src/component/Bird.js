import React from "react";
import birdImg from "../image/bird.png"
const styleBird = {
  position: "absolute",
  top: 256,
  left: 144,
  width: 37,
  height: 26,
  backgroundImage: `url(${birdImg})`,
};

class Bird extends React.Component {
  render() {
    return <div style={styleBird}></div>;
  }
}

export default Bird;
