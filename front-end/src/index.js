import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // reset-css
import App from "./App";
import { Contexts } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    {/* <Contexts> */}
    <App />
    {/* </Contexts> */}
  </React.StrictMode>,
  document.getElementById("root")
);
