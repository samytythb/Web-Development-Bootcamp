import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div>
    <App />
  </div>
);
