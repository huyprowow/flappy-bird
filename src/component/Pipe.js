import React from "react";
import topPipeImg from "../image/pipe-top.png";
import bottomPipeImg from "../image/pipe-bottom.png";
import { connect } from "react-redux";
class Pipe extends React.Component {
  render() {
    const { x, pipes } = this.props;
    // console.log(pipes);
    return (
      <div style={{ position: "relative" }}>
        {pipes.map(({ topHeight }, i) => {
          return (
            <div key={`pipe-${i}`}>
              <div
                style={{
                  position: "absolute",
                  left: x + i * 200,
                  top: 0,
                  width: 52,
                  height: topHeight,
                  backgroundImage: `url(${topPipeImg})`,
                  backgroundPosition: "bottom",
                  transition: "left 250ms",
                }}
              ></div>
              <div id='pipe'
                style={{
                  position: "absolute",
                  width: 52,
                  backgroundImage: `url(${bottomPipeImg})`,
                  transition: "left 250ms",
                  top: topHeight + 100,
                  left: x + i * 200,
                  height: 512 - topHeight - 100,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = ({ pipe }) => ({ x: pipe.x, pipes: pipe.pipes });
const mapDispatchToProps = () => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Pipe);
