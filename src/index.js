import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return <MainLayout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
