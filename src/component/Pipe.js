import React from "react";
import topPipeImg from "../image/pipe-top.png";
import bottomPipeImg from "../image/pipe-bottom.png";
import { connect } from "react-redux";
class Pipe extends React.Component {
  render() {
    let { x, pipes } = this.props;
    console.log(pipes);
    return (
      <div style={{ position: "relative" }}>
        {pipes.map(({ topHeight }, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  position: "absolute",
                  left: x + i * 200,
                  top: 0,
                  width: 52,
                  height: topHeight,
                  backgroundImage: `url(${topPipeImg})`,
                  backgroundPosition: "bottom",
                  transition: "transform 200ms,left 200ms",
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  left: x + i * 200,
                  top: 300,
                  width: 52,
                  height: topHeight + 100,
                  backgroundImage: `url(${bottomPipeImg})`,
                  transition: "transform 200ms,left 200ms",
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
