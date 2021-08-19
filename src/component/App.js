import React from "react";
import "../dist/App.css";
import GameDisplay from "./GameDisplay"

class App extends React.Component {
  render() {
    return (
      <div>
        <GameDisplay />
      </div>
    );
  }
}

export default App;
