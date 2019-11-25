import React from "react";
import ReactDOM from "react-dom";
import RandomUser from "./components/RandomUser";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <RandomUser />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
