import React, { Component } from "react";
import "./App.css";
import Function from "./components/Function";

const genders = ["male", "female", "other"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender: null,
      birthdate: ""
    };
  }

  render() {
    <Function />;
  }
}

export default App;
