import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mail: "",
      date: "",
      gender: ""
    };
  }

  handleChange = key => ({ target: { value } }) => {
    console.log(key, this.state, value);
    this.setState({ [key]: value });
  };

  handleSubmit = () => {
    const { firstName, lastName, mail, date, gender } = this.state;
    alert(`${firstName} ${lastName} ${mail} ${date} ${gender}`);
  };

  render() {
    const { firstName, lastName, mail, date, gender } = this.state;
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            value={firstName}
            onChange={this.handleChange("firstName")}
          />
          <input
            required
            value={lastName}
            onChange={this.handleChange("lastName")}
          />
          <input
            required
            type="email"
            value={mail}
            onChange={this.handleChange("mail")}
          />
          <input
            required
            type="date"
            value={date}
            onChange={this.handleChange("date")}
          />
          <label>
            <input
              type="radio"
              required
              name="gender"
              value="Masculino"
              onChange={this.handleChange("gender")}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              required
              name="gender"
              value="Femenino"
              onChange={this.handleChange("gender")}
            />
            Femenino
          </label>
          <button type="submit">
            {"Submit"}
          </button>
        </form>
      </div>
    );
  }
}

export default App;
