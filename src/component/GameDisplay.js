import React from "react";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import bgImg from "../image/bg.png";

const styleGameDisplay = {
    position:'relative',
  width: 288,
  height: 512,
  backgroundImage: `url(${bgImg})`,
  margin: "0 auto",
};

class GameDisplay extends React.Component {
  render() {
    return (
      <div style={styleGameDisplay}>
        <Bird />
        <Pipe />
        <Foreground />
      </div>
    );
  }
}

export default GameDisplay;
