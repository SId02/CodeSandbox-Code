import React from "react";
import ReactDOM from "react-dom";
import ImageSlider from "./components/imageSlider";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ImageSlider />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
