import React from "react";
import { connect } from "react-redux";
import birdImg from "../image/bird.png";
// const styleBird = {

// };
class Bird extends React.Component {
  render() {
    console.log(this.props.y);
    return (
      <div
        style={{
          position: "absolute",
          top: this.props.y,
          left: 144,
          width: 37,
          height: 26,
          backgroundImage: `url(${birdImg})`,
        }}
      ></div>
    );
  }
}
const mapStateToProps = ({ bird }) => ({ y: bird.y });

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Bird);
