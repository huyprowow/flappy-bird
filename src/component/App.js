import React from "react";
import "../dist/App.css";
import GameDisplay from "./GameDisplay";
import {Provider} from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={this.props.store}>
        <GameDisplay />
        </Provider>
      </div>
    );
  }
}

export default App;
