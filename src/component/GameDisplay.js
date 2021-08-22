import React from "react";
import Bird from "./Bird";
import Pipe from "./Pipe";
import Foreground from "./Foreground";
import bgImg from "../image/bg.png";
import { connect } from "react-redux";
import store from "../store";
const styleGameDisplay = {
  position: "relative",
  width: 288,
  height: 512,
  margin: "0 auto",
  overflow: "hidden",
  backgroundImage: `url(${bgImg})`,
  border: "2px solid",
  borderRadius: "5px",
};

let gameLoop;
let createPipe;
let deletePipe;
class GameDisplay extends React.Component {
  componentDidMount = () => {
    //== reactHook useEffect
    if (this.props.status === "over") {
      clearInterval(gameLoop);
      clearInterval(createPipe);
      clearInterval(deletePipe);
    }
    document.addEventListener("keypress", this.handleKey);
  };
  componentDidUpdate = () => {
    //== reactHook useEffect
    if (this.props.status === "over") {
      clearInterval(gameLoop);
      clearInterval(createPipe);
      clearInterval(deletePipe);
    }
    document.addEventListener("keypress", this.handleKey);
  };

  componentWillUnmount = () => {
    //== reactHook useEffect
    document.removeEventListener("keypress", this.handleKey);
  };
  handleKey = (e) => {
    const { status, fly, start } = this.props;
    // console.log(status);
    if (e.key === " ") {
      //nhan nut space
      fly(); //nhan tu mapDispatchToProps, goi de gui hanh dong
      if (status !== "playing") {
        start(); //nhan tu mapDispatchToProps, goi de gui hanh dong
      }
    }
  };

  render() {
    return (
      <div id="game-display" style={styleGameDisplay}>
        <Bird />
        <Pipe />
        <Foreground />
      </div>
    );
  }
}

const over = (dispatch) => {
  console.log(store.getState());

  const state = store.getState();
  console.log(state);

  const birdY = state.bird.y;
  const pipes = state.pipe.pipes;
  const x = state.pipe.x;

  const challenges = pipes
    .map(({ topHeight }, i) => {
      return {
        x1: x + i * 200,
        y1: topHeight,
        x2: x + i * 200,
        y2: topHeight + 100,
      };
    })
    .filter(({ x1 }) => (x1 > 0 && x < 288 ? true : false));
  //chi lay toa do diem tren mh

  //toa do mat dat
  if (birdY > 512 - 106 - 13) {
    dispatch({ type: "OVER" });
  }
  if (challenges.length) {
    const { x1, y1, x2, y2 } = challenges[0]; //toan do cot truoc mat con chim

    console.log(birdY);
    if (
      (x1 < 120 + 37 && 120 < x1 + 52 && birdY < y1 + 13) || //dung cot tren
      (x2 < 120 + 37 && 120 < x1 + 52 && birdY > y2 - 13) //dung cot duoi
    ) {
      dispatch({ type: "OVER" });
    }
  }
};
const mapStateToProps = ({ game }) => ({ status: game.status });

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => {
      dispatch({ type: "START" });
      //props nhu 1 ham gui di hanh dong start
      gameLoop = setInterval(() => {
        //200 milis roi xuong 1 lan
        dispatch({ type: "FALL" }); // gui hanh dong fall de chim roi xuong
        dispatch({ type: "RUN" }); //gui hanh dong de pipe(ong) di chuyen
      }, 200);
      setInterval(() => {
        over(dispatch);
      }, 200);
      // setTimeout(() => {

      createPipe = setInterval(() => {
        dispatch({ type: "CREATE" });
      }, 3000); //gui hanh dong de tao pipe(ong)
      // },9000)
      // setTimeout(() => {

      deletePipe = setInterval(() => {
        dispatch({ type: "DELETE" });
      }, 12000); //gui hanh dong de xoa bot pipe(ong) optimine nhung eo awn thua lam
      // },9000)
    },
    fly: () => {
      dispatch({ type: "FLY" });
    },
  };
};

//connect voi redux de lay state va gui action thay doi state
export default connect(mapStateToProps, mapDispatchToProps)(GameDisplay);
