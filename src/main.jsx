import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App'
// import "./index.css";
import RouterDom from "./router/RouterDom";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterDom />
  </Provider>
);
