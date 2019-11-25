import React, { Component } from "react";
import ValidationFrom from "./components/ValidationForm";
class App extends Component {
  state = {
    visible: true
  };
  render() {
    return (
      <div className="App">
        <ValidationFrom />
      </div>
    );
  }
}
export default App;
