import React, { Component } from "react";
import "./HelloWorld.css";

class HelloWorld extends Component {
  state = {
    who: "world!",
    React: "React",
    Friend: "Friend",
    World: "World"
  };
  reactButtonClicked = () => {
    const newMessage = this.state.React;
    this.setState({
      who: newMessage
    });
  };

  friendButtonClicked = () => {
    const newMessage = this.state.Friend;
    this.setState({
      who: newMessage
    });
  };

  worldButtonClicked = () => {
    const newMessage = this.state.World;
    this.setState({
      who: newMessage
    });
  };
  render() {
    return (
      <div className="message">
        <p> Hello, {this.state.who}! </p>

        {/* <button onClick={() => this.setState({ who: "world" })}>World</button>
        <button onClick={() => this.setState({ who: "React" })}>React</button>
        <button onClick={() => this.setState({ who: "Friend" })}>Friend</button> */}
        <button onClick={this.reactButtonClicked}>React</button>
        <button onClick={this.friendButtonClicked}>Friend</button>
        <button onClick={this.worldButtonClicked}>World</button>
      </div>
    );
  }
}

export default HelloWorld;
