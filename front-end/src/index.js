import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css"; // reset-css
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
