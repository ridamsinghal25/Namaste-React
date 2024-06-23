import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>Namaste React Episode 7</h2>
        <div>
          loggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"first"} location="Nakur Class" />
      </div>
    );
  }
}

export default About;
