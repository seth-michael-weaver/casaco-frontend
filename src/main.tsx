import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "react-tooltip/dist/react-tooltip.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "store";
import "react-tooltip/dist/react-tooltip.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </React.StrictMode>
);