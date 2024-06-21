import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Namaste React Episode 7</h2>
        <UserClass name={"first"} location="Nakur Class" />
      </div>
    );
  }
}

export default About;
