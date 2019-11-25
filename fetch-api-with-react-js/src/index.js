import React from "react";
import ReactDOM from "react-dom";
import Users from "./components/fetch_Http";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
