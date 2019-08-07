import React from "react";

class Counter extends React.Component {
  constructor(props) {
    console.log("props in constructor", props);
    super(props);
    this.state = { count: 0 };
  }
  //   state = {
  //     count: 0
  //   };

  handleButtonClicks = () => {
    console.log("props in handleButtonClick", this.props);
    console.log("state in handleButtonClick", this.state);
    this.setState({ count: this.state.count + 1 });

    // const newCount = this.state.count + 1;
    // this.setState({
    //   count: newCount
    // });
  };
  render() {
    return (
      <div>
        <p> The Current Count: {this.state.count}</p>
        <button onClick={this.handleButtonClicks}>Add 1</button>
      </div>
    );
  }
}

export default Counter;
