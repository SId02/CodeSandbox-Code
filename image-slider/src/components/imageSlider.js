import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://source.unsplash.com/1600x900/?phone",
      "https://source.unsplash.com/1600x900/?electronics",
      "https://source.unsplash.com/1600x900/?animal",
      "https://source.unsplash.com/1600x900/?water",
      "https://source.unsplash.com/1600x900/?nature",
      "https://source.unsplash.com/1600x900/?business-work"
    ],
    index: 0
  };

  handleNext = () => {
    this.setState({
      index: this.state.index + 1
    });
  };

  render() {
    return (
      <div>
        <img
          style={{ width: 500, height: 500 }}
          src={this.state.images[this.state.index]}
          alt=" randomPicture"
        />
        <button
          onClick={() => {
            this.setState({ index: this.state.index - 1 });
          }}
        >
          {" "}
          previous{" "}
        </button>
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}
