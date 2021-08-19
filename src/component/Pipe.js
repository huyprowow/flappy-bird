import React from "react";
import topPipeImg from "../image/pipe-top.png"
import bottomPipeImg from "../image/pipe-bottom.png"

const stylePipe = {};
const stylePipeTop = {
  position: "absolute",
  left: 144,
  top: 0,
  width: 52,
  height: 206,
  backgroundImage:`url(${topPipeImg})`,
  backgroundPosition:'bottom'

};
const stylePipeBottom = {
  position: "absolute",
  left: 144,
  top: 300,
  width: 52,
  height: 206,
  backgroundImage:`url(${bottomPipeImg})`,
};

class Pipe extends React.Component {
  render() {
    return (
      <div style={stylePipe}>
        <div style={stylePipeTop}></div>
        <div style={stylePipeBottom}></div>
      </div>
    );
  }
}

export default Pipe;
