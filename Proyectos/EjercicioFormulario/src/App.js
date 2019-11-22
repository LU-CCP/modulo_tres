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
          <p>
            <label>Tu Nombre: </label>
            <input
              required
              value={firstName}
              onChange={this.handleChange("firstName")}
              placeholder="Nombre"
            />
          </p>
          <p>
            <label>Tu Apellidos: </label>
            <input
              required
              value={lastName}
              onChange={this.handleChange("lastName")}
              placeholder="Apellido"
            />
          </p>
          <p>
            <label>Tu Email: </label>
            <input
              required
              type="email"
              value={mail}
              onChange={this.handleChange("mail")}
              placeholder="Email"
            />
          </p>
          <p>
            <label>Fecha de Nacimiento: </label>
            <input
              required
              type="date"
              value={date}
              onChange={this.handleChange("date")}
            />
          </p>
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
          <p>
            <button type="submit">
              {"Submit"}
            </button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
