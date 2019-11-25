import React from "react";
import ReactDOM from "react-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let emailError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="columns is-mobile">
          <div className="column is-half is-offset-one-quarter">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    name="name"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="help is-danger">{this.state.nameError}</div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="help is-danger">{this.state.emailError}</div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>

                <div help is-danger>
                  {this.state.passwordError}
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button type="submit" className="button is-link">
                    submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
