import React, { Component } from "react";
import Accordion from "./state-drills";

const sections = [
  {
    title: "Our Founder",
    content:
      "A passionate Full Stack Web Developer, who is a hard worker, and Porsche enthusiast!"
  },
  {
    title: "Gen-Tech",
    content:
      "Gen-Tech is a machine learning data Analytics company! Our company goal is making sure you are informed "
  },
  {
    title: "Contact",
    content: "support@gen-tech.com"
  }
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion sections={sections} />
      </div>
    );
  }
}

export default App;
