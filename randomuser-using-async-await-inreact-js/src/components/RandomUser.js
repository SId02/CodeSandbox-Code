import React from "react";
import "../styles.css";
export default class RandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div id="gallery" className="gallery">
          <div className="card">
            <div className="card-img-container">
              <img
                className="card-img"
                src={this.state.person.picture.large}
                alt="profile"
              />
            </div>
            <div className="card-info-container">
              <p className="card-text ">{this.state.person.name.title}</p>
              <h3 id="name" className="card-name  cap">
                {this.state.person.name.first} {this.state.person.name.last}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
