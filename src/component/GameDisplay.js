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
  // overflow: "hidden",
};
class GameDisplay extends React.Component {
  componentDidMount = () => {
    //== reactHook useEffect
    document.addEventListener("keyup", this.handleKey);
  };

  componentWillUnmount = () => {
    //== reactHook useEffect
    document.removeEventListener("keyup", this.handleKey);
  };
  handleKey = (e) => {
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
      dispatch({ type: "START" });
      //props nhu 1 ham gui di hanh dong start
      setInterval(() => {
        //200 milis roi xuong 1 lan
        dispatch({ type: "FALL" }); // gui hanh dong fall de chim roi xuong
        dispatch({ type: "RUN" }); //gui hanh dong de pipe(ong) di chuyen
        dispatch({ type: "CREATE" }); //gui hanh dong de tao pipe(ong)
      }, 200);
    },
    fly: () => {
      dispatch({ type: "FLY" });
    },
  };
};

//connect voi redux de lay state va gui action thay doi state
export default connect(mapStateToProps, mapDispatchToProps)(GameDisplay);
