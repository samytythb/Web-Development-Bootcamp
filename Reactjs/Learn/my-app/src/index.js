import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";
ReactDOM.render(
  <div>
    <h1>Information</h1>
    <Card name="Minh Duc" age="22" email="leminhduc20082001@gmail.com" />
    <Card name="Minh Duc Le" age="22" email="leminhduc20082001@gmail.com" />
    <Card name="Minh" age="22" email="leminhduc1@gmail.com" />
  </div>,
  document.getElementById("root")
);
