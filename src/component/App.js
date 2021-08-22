import React from "react";
import GameDisplay from "./GameDisplay";
import { Provider } from "react-redux";
import "../style/dist/App.css";
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
