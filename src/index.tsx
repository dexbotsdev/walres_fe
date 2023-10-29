import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import "./index.scss";
import { Connection } from "./containers/Connection";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Connection.Provider>
        <App />
      </Connection.Provider>
  </React.StrictMode>
);
