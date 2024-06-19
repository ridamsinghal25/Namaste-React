import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
      value: "",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ridamsinghal25");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: linkedin.in</h4>
        <input
          value={this.state.value}
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
        />
      </div>
    );
  }
}

export default UserClass;
