import React from "react";
import { connect } from "react-redux";
import birdImg from "../image/bird.png";
// const styleBird = {

// };
class Bird extends React.Component {
  render() {
    // console.log(this.props.y);
    // console.log(this.props.numDeg);
    const {y,numDeg} = this.props;
    return (
      <div
        style={{
          position: "absolute",
          top: y,
          left: 144,
          width: 37,
          height: 26,
          backgroundImage: `url(${birdImg})`,
          transform: `rotate(${numDeg}deg)`,
          transition:'transform 200ms,top 200ms' //de chin huong mat len khi bay (an space)
        }}
      ></div>
    );
  }
}
const mapStateToProps = ({ bird }) => ({ y: bird.y,numDeg: bird.numDeg});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
