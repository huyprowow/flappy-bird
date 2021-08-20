import React from "react";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import bgImg from "../image/bg.png";
import { connect } from "react-redux";

const styleGameDisplay = {
  position: "relative",
  width: 288,
  height: 512,
  backgroundImage: `url(${bgImg})`,
  margin: "0 auto",
};

class GameDisplay extends React.Component {
  handleKeyDown = (e) => {
    const { status } = this.props;
    console.log(status);
    if (e.key === " ") {
      //nhan nut space
      this.props.fly(); //nhan tu mapDispatchToProps, goi de gui hanh dong
    }
    if (this.props.status !== "playing") {
      this.props.start(); //nhan tu mapDispatchToProps, goi de gui hanh dong
    }
  };

  componentDidMount = () => {
    //== reactHook useEffect
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount = () => {
    //== reactHook useEffect
    document.removeEventListener("keydown", this.handleKeyDown);
  };

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

const mapStateToProps = ({ game }) => ({ status: game.status });

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => {
      //props nhu 1 ham gui di hanh dong start
      dispatch({ type: "START" });
    },
    fly: () => {
      console.log("fly");
    },
  };
};

//connect voi redux de lay state va gui action thay doi state
export default connect(mapStateToProps, mapDispatchToProps)(GameDisplay);
