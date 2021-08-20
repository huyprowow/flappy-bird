import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import store from "./store";

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
