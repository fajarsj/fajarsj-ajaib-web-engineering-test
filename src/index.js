import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@fontsource/open-sans/variable-full.css";
import "normalize.css";
import "./theme/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
